$(document).ready(function(){
	/**
	* запрещаем клик правой клавишей
	*/
	$(document).on('onContextMenu', function(e){
		e.preventDefault();
		return false;
	});
});

window.nxg = {};
nxg.modules = {};
nxg.flashMovie = null;

nxg.getModule = function(name) {
	if(!nxg.modules[name]) {
		throw 'Module ' + name + ' not found';
	}
	return nxg.modules[name];
}

nxg.registerModule = function(name, object) {
	nxg.modules[name] = object;
}

nxg.flashGate = {
	handlers: {}
}

nxg.flashGate.on = function(module, event, handlerCb) {
	if(!nxg.flashGate.handlers[module]) {
		nxg.flashGate.handlers[module] = {};
	}

	if(!nxg.flashGate.handlers[module][event]) {
		nxg.flashGate.handlers[module][event] = [];
	}

	nxg.flashGate.handlers[module][event].push(handlerCb);
}

nxg.flashGate.emit = function(module, event, params) {
	if(!nxg.flashGate.handlers[module]) {
		return;
	}
	if(!nxg.flashGate.handlers[module][event]) {
		return;
	}
	var handlers = nxg.flashGate.handlers[module][event];
	setTimeout(function() {
		for(var i=0; i<handlers.length; i++) {
			handlers[i](params);
		}
	}, 1);
}

/**
 * Метод дёргает флешка чтобы сказать что она проинитилась и способна принимать
 * эвенты.
 * @var string module
 * @var object handlers массив строк с именами методов, которые дёргает
 *      js в ответ на события
 */
nxg.flashGate.started = function(module, handlers) {
	try {
		if(handlers) {
			for(var event in handlers) {
				(function(module, event, handler) {
					nxg.flashGate.on(
						module,
						event,
						function(params) {
							var movie = nxg.flashMovie;
							if(movie && movie[handler]) {
								movie[handler](event, params, module);
							}
						}
					)
				})(module, event, handlers[event])
			}
		}
		var m = nxg.getModule(module);
		m.flashStarted();
	} catch(e) {
//		console.error('Exception: ' + e)
	}
	return {success: true};
}

nxg.setFlashMovie = function(movie) {
	this.flashMovie = movie;
}

nxg.ErrordClient = function(networkIdent, applicationId, userId, gateUrl) {
	var networkIds = {
		vkontakte: 1,
		mail: 2,
		odnoklassniki: 3,
		facebook: 4,
		mg: 2,
		wb: 4
	};

	this.gateUrl = gateUrl;
	this.queue = new nxg.JsonpRequestsAgent(this.gateUrl, null, null, 'POST');

	this.networkIdent = networkIdent;
	this.networkId = networkIds[networkIdent];
	this.applicationId = applicationId;
	this.userId = userId;

};

nxg.ErrordClient.flashStarted = function() {
	//empty
};

nxg.ErrordClient.prototype.send = function(error) {
	error.network_id = this.networkId;
	error.app_id = this.applicationId;
	error.user_id = this.userId;
	return this.queue.send(error);
};

nxg.JsonpRequestsAgent = function(gateUrl, maxQueueSize, serverTimeout, method) {
	this.gateUrl = gateUrl;
	this.serverTimeout = serverTimeout || 10000;
	this.maxQueueSize = maxQueueSize || 1000;
	
	this.method = method || 'GET';

	this.queue = [];
	this.isStopped = true;
};

nxg.JsonpRequestsAgent.prototype.send = function(item) {
	//очередь переполнена
	if (this.queue.length > this.maxQueueSize) {
		return false;
	}
	if (item === undefined) {
		return false;
	}
	this.queue.push(item);
	//запускаем очередь, если та была остановлена.
	if (this.isStopped === true) {
		this._continue();
	}
	return true;
}
nxg.JsonpRequestsAgent.prototype._continue = function() {
	//останавливаем очередь, если нечего отправлять
	if (!this.queue.length) {
		this.isStopped = true;
	} else {
		this.isStopped = false;
		this._sendItem();
	}
}
nxg.JsonpRequestsAgent.prototype._sendItem = function() {
	var item = this.queue.shift();
	var self = this;
	$.ajax({
		type: this.method,
		url: this.gateUrl,
		dataType: 'jsonp',
		timeout: this.serverTimeout,
		data: item,
		success: function(json) {
			//ошибка сервера
			if (json.error !== undefined)
				self.send(item);
			self._continue();
		},
		error: function() {
			self.send(item);
			self._continue();
		}
	 });
}

window.nxg.Math = {}
window.nxg.Math.shuffle = function(array) {
	for(var i=0; i<array.length - 1; i++) {
		var offset = (Math.random() * (array.length - i) + i) ^ 0;
		var t = array[offset];
		array[offset] = array[i];
		array[i] = t;
	}
}
/*
nxg.PushdClient = function(servers, networkIdent, applicationId, userId, authToken) {
	this.connected = false;
	this.sock = null;
	this.handlers = {};
	this.messagesHistory = [];
	this.servers = servers;
	this.networkIdent = networkIdent;
	this.applicationId = applicationId;
	this.userId = userId;
	this.authToken = authToken;
}

nxg.PushdClient.prototype.connect = function() {
	var self = this;

	this._selectSocketIoServer(
		this.servers,
		function(serverUrl) {
			self._realConnectSocketIo(serverUrl);
		},
		function() {
			self.connected = false;
			self.flashEmit('disconnect');
		}
	)
}

nxg.PushdClient.prototype._selectSocketIoServer = function(serversList, successCb, errorCb) {
	var list = serversList.slice();
	nxg.Math.shuffle(list);

	var tryNext = function(tryOffset) {
		var url = list[tryOffset];
		if(!url) {
			setTimeout(function() {
				tryNext(0);
			}, 10000)
			return;
		}
		setTimeout(function() {
			successCb(url);
		}, 1);
	}
	tryNext(0);
}

nxg.PushdClient.prototype._realConnectSocketIo = function(serverUrl) {
	var self = this;
	var tryNumber = 1;

	serverUrl = serverUrl
		+ '?networkIdent=' + encodeURIComponent(this.networkIdent)
		+ '&applicationId=' + encodeURIComponent(this.applicationId)
		+ '&userId=' + encodeURIComponent(this.userId)
		+ '&authToken=' + encodeURIComponent(this.authToken);

	var maxReconnectionsCount = 4;

	try {
		this.sock = io.connect(
			serverUrl,
			{
				'force new connection': true,
				'max reconnection attempts': maxReconnectionsCount,
				'reconnection delay': Math.floor(Math.random() * 3500) + 500
			}
		)
	} catch(e) {
		return false;
	}

	var _reconnectFailedTimeout = null;
	this.sock.on('connect', function() {
		if(_reconnectFailedTimeout) {
			clearTimeout(_reconnectFailedTimeout);
		}
		self.emit('connect');
		self.flashEmit('connect');
		self.connected = true;
		tryNumber = 1;
		console.log('io.connect');
	})

	this.sock.on('disconnect', function() {
		self.emit('disconnect');
		self.flashEmit('disconnect');
		self.connected = false;
		console.log('io.disconnect');
	})

	this.sock.on('connect_failed', function() {
		console.log('io.connect_failed');
		self.emit('disconnect');
		self.flashEmit('disconnect');
		self.connected = false;
		if(_reconnectFailedTimeout) {
			clearTimeout(_reconnectFailedTimeout);
		}
		_reconnectFailedTimeout = setTimeout(onReconnectFailed, 1000);
	})

	var onReconnectFailed = function() {
		self.sock.disconnect()

		var reconnectDelay = Math.floor(Math.random() * 5000) + 1500 * tryNumber
		tryNumber++;

		setTimeout(function() {
			self.connect()
		}, reconnectDelay)
	}

	this.sock.on('reconnecting', function(interval, tryNumber) {
		console.log('io.reconnecting', interval, tryNumber)

		if(tryNumber >= maxReconnectionsCount) {
			if(_reconnectFailedTimeout)
				clearTimeout(_reconnectFailedTimeout);

			_reconnectFailedTimeout = setTimeout(onReconnectFailed, interval + 1000)
		}
	})

	this.sock.on('reconnect_failed', function() {
		console.log('io.reconnect_failed')
	})

	this.sock.on('error', function() {
		console.log('io.error', self.connected)
		if(!self.connected) {
			self.emit('disconnect')
			self.flashEmit('disconnect')

			self.connected = false
		} else {
//			console.log('error')
		}
	})

	var antidup = [];
	var antidupMaxLength = 100;

	this.sock.on('msg', function(data) {
		var id = '' + data.type + ':' + data.date + ':' + (data.body ? data.body.id : '');
		if(antidup.indexOf(id) !== -1) {
			console.log('message duplicate', data);
			return;
		}

		antidup.push(id);
		if(antidup.length > antidupMaxLength)
			antidup.shift();

		self.emit('message', data)
		self.flashEmit('message', data)

		if(self.messagesHistory !== null && self.messagesHistory.length < 1000)
			self.messagesHistory.push(data)

		console.log('msg', data)
	})
}

nxg.PushdClient.prototype.flashEmit = function(event, parameters) {
	nxg.flashGate.emit('pushd', event, parameters)
}

nxg.PushdClient.prototype.flashStarted = function() {
	if(this.messagesHistory) {
		this.flashEmit('connect')

		for(var i=0; i<this.messagesHistory.length; i++) {
			this.flashEmit('message', this.messagesHistory[i])
		}

		this.messagesHistory = null

		if(this.connected === false)
			this.flashEmit('disconnect')
	} else {
		if(this.connected === true)
			this.flashEmit('connect')
		else if(this.connected === false)
			this.flashEmit('disconnect')
	}
}

nxg.PushdClient.prototype.emit = function(event, data) {
	if(!this.handlers[event])
		return

	for(var i=0; i<this.handlers[event].length; i++) {
		try {
			this.handlers[event][i](data)
		} catch(e) {}
	}
}

nxg.PushdClient.prototype.on = function(event, cb) {
	if(!this.handlers[event]) {
		this.handlers[event] = [];
	}
	this.handlers[event].push(cb);
}
*/
/*
nxg.StatClient = function(networkIdent, applicationId, userId, sessionId, secretKey, gateUrl) {
	this.gateUrl = gateUrl;
	this.networkIdent = networkIdent;
	this.applicationId = applicationId;
	this.userId = userId;
	this.sessionId = sessionId;
	this.secretKey = secretKey;
	this.queue = new nxg.JsonpRequestsAgent(this.gateUrl);
};

nxg.StatClient.flashStarted = function() {

};

nxg.StatClient.prototype.send = function(event, object, value, segment) {
	var ts = Math.floor(new Date().getTime() / 1000);
	var item = {
		data: JSON.stringify(
			{
				secret: this.secretKey,
				date: ts,
				data: [
					{
						event: event,
						object: object,
						value: value,
						date: ts,
						segment: segment || []
					}
				],
				network_app_id: this.applicationId,
				network_id: this.networkIdent,
				sessionId: this.sessionId,
				userId: this.userId
			}
		)

	};
	//return this.queue.send(item);
	return true;
};
*/

nxg.friendsOnline = function(params) {
	for (var param in params) this[param] = params[param];
	if (!this.debug) console.log('[o] debug off');
	self = this;
}

nxg.friendsOnline.prototype.generateId = function() {
	return Math.floor(Math.random() * (this.maxId - this.minId) + this.minId);
}

nxg.friendsOnline.prototype.run = function() {
	this.batchExec(true);
	setInterval(function(){ self.batchExec(); }, self.interval);
}

nxg.friendsOnline.prototype.filterFriends = function(friends) {
	if (this.debug) var srcCount = friends.length;
	var result = [];
	friends.forEach(function(item){ if (item.online && !item.online_mobile) result.push(item.uid); });
	if (this.debug) console.log('[f] filtered: ' + (srcCount - result.length));
	return result;
}

nxg.friendsOnline.prototype.processResponse = function(response) {
	if (response && response.error) console.log(response.error);
}

nxg.friendsOnline.prototype.sendToFlash = function(friends) {
	var data = {
		method          : 'POST',
		body            : JSON.stringify({ online: friends, aid : this.aid, myId : this.uid }),
		bodyCompression : 'deflate',
		onSuccess       : 'nxg.friendsOnline.prototype.processResponse',
		onError         : 'nxg.friendsOnline.prototype.processResponse'
	}

	if (thisMovie('flash-helper') && thisMovie('flash-helper').sendURLRequest) {
		thisMovie('flash-helper').sendURLRequest(this.url, data);
	}
	if (this.debug) console.log(data);
}

nxg.friendsOnline.prototype.batchExec = function(first) {

	var requestString = [];
	var resultArr = [];

	if (first) resultArr.push(this.uid);

	for (var i = 0; i < this.count; i++) {
		var tmpid = first ? this.uid : this.generateId();
		first = false;
		requestString.push('"' + tmpid + '": API.friends.get({ fields: "uid, online", uid : ' + tmpid + '}) ');
	}

	VK.api('execute', {
		code : 'return {' + requestString.join() + '};'
	}, function(response){

		for (var item in response.response) {
			if (response.response[item]) {
				var result = self.filterFriends(response.response[item]);
				resultArr = resultArr.concat(result);
			}
		}

		self.sendToFlash(resultArr);
	});
}
