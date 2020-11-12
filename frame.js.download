'use strict';
window.NXG = window.NXG || {};

function thisMovie(movieName) {
	if (navigator.appName.indexOf('Microsoft') != -1) {
		return window[movieName];
	} else {
		return document[movieName];
	}
}

var NXPaymentDone = false;
window.addEventListener('message', NXReceiveMessage, false);
function NXReceiveMessage(event) {
	var res;
	if (event.origin.match('xsolla')) {
		res = JSON.parse(event.data);
		console.log(res);
		if (res.action === 'resize') {
			$('#paymentBox .loader').hide();
		}
		if (res.command === 'status') {
			if (res.data) {
				if (res.data.paymentInfo) {
					if (res.data.paymentInfo.status == 'done') {
						NXPaymentDone = true;
						console.log('call paymentReceivedCallback');
						NXReturnPaymentResult('paymentReceivedCallback', res.data.paymentInfo);
					}
				}
			}
		}
	}
}

function NXReturnPaymentResult(func, data) {
	if (thisMovie('flash-app')) {
		if (typeof thisMovie('flash-app')[func] === 'function') {
			thisMovie('flash-app')[func](data);
		}
	}
}
//external interfaces
function NXShowPaymentBox(data) {
	var url = NXRPCURL+'xsolla-token.php';
	$('#paymentBox .loader').show();
	data.psAuth = NXAuth;
	data.accountId = NXAccountId;
	
	$.post(url, data, function(res) {
		
		if (res && res.token) {
			$('#paymentBox iframe').attr('src', NXXsollaUrl+res.token);
			$('#paymentBox').show();
			fbq('track', 'InitiateCheckout');
			if (data.merchant_param) {
				gtag('event', 'begin_checkout', {
					'items': [{
						'id': data.merchant_param.productId,
						'name': data.merchant_param.description,
						'quantity': 1
					}]
				});
			}
			gtag('event', 'conversion', {
				'send_to': 'AW-847225030/UmFuCJiahpABEMbB_pMD',
				'event_callback': function(){}
			});
			_tfa.push({notify: 'event', name: 'start_checkout', id: 1171685});
			ym(49488076, 'reachGoal', 'InitiateCheckout');
		} else {
		}
	}, 'json');
}
function NXClosePaymentBox() {
	if (!NXPaymentDone) {
		console.log('call paymentCanceledCallback');
		NXReturnPaymentResult('paymentCanceledCallback');
	}
	NXPaymentDone = false;
	$('#paymentBox').hide();
}
function NXDelayedPopUp(delayedSignUpType) {
	delayedSignUpType = delayedSignUpType || 'signUpProposal';
	var text;
	$('.auth_box').removeClass('show');
	$('.registration').removeClass('hidden');
	if (delayedSignUpType === 'signUpProposal') {
		text = NXGetLocale('REG_SINGUP_TO_SAVE_PROGRESS');
	} else if (delayedSignUpType === 'signUpRequired') {
		text = NXGetLocale('REG_YOU_NEED_TO_SIGNUP');
	} else if (delayedSignUpType === 'signUpForPurchase') {
		text = NXGetLocale('REG_YOU_NEED_TO_CREATE_ACCOUNT');
	} else if (delayedSignUpType === 'loginDelayed') {
		text = NXGetLocale('DELAYED_POPUP_TITLE');
		$('.registration').addClass('hidden');
		$('.auth_box').addClass('show');
	}
	$('.modal-delayed-header').html(text);
	$('.registration .holder.password').addClass('invisible');
	$('.registration .holder.email').removeClass('invisible');
	$('.registration .holder.play').addClass('hidden');
	$('.registration .holder.next').removeClass('hidden');
	$('.modal-delayed').show();
	$.post('api.php', {
		method: 'delayedPopUp',
		delayedSignUpType: delayedSignUpType
	}, function(res) {
		//empty
	}, 'json');
}
function resetDelayed(url) {
	NXG.SetCookie('hash', '', 999999999);
	NXG.SetCookie('user_id', '', 999999999);
	document.location.href = document.location.origin + document.location.pathname;
}
function NXOneSignalShowRequest() {
	OneSignal.push(function() {
		OneSignal.showHttpPrompt({force: true});
	});
}
function NXOneSignalGetUserId() {
	OneSignal.push(function() {
		OneSignal.getUserId(function(userId) {
			if (thisMovie('flash-app') && thisMovie('flash-app')['NXOneSignalGetUserId_callback']) {
				thisMovie('flash-app')['NXOneSignalGetUserId_callback'](userId);
			}
		});
	});
}
function NXOneSignalGetPermissions() {
	OneSignal.push(['getNotificationPermission', function(permission) {
		if (thisMovie('flash-app') && thisMovie('flash-app')['NXOneSignalGetPermissions_callback']) {
			thisMovie('flash-app')['NXOneSignalGetPermissions_callback'](permission);
		}
	}]);
}
function NXOneSignalGetPushStatus() {
	OneSignal.push(function() {
		OneSignal.isPushNotificationsEnabled(function(isEnabled) {
			if (thisMovie('flash-app') && thisMovie('flash-app')['NXOneSignalGetPushStatus_callback']) {
				thisMovie('flash-app')['NXOneSignalGetPushStatus_callback'](isEnabled);
			}
		});
	});
}

//callbacks
function NXSendOneSignalToken(userId, errorText) {
	var url = NXRPCURL+'onesignal-token.php';
	var data = {
		networkIdent: 'web',
		applicationId: NXAppID,
		psAuth: NXAuth,
		accountId: NXAccountId
	};
	if (userId) {
		data.oneSignalUserId = userId;
	} else {
		data.oneSignalUserId = errorText;
	}
	$.post(url, data, function(res) {
		if (userId) {
			if (thisMovie('flash-app') && thisMovie('flash-app')['NXOneSignalNotificationChange_callback']) {
				thisMovie('flash-app')['NXOneSignalNotificationChange_callback'](true);
			}
		}
	}, 'json').fail(function() {
		if (userId) {
			if (thisMovie('flash-app') && thisMovie('flash-app')['NXOneSignalNotificationChange_callback']) {
				thisMovie('flash-app')['NXOneSignalNotificationChange_callback'](false);
			}
		}
	});
}
function NXSendOneSignalUid() {
	OneSignal.push(function() {
		OneSignal.getUserId(function(userId) {
			console.log('userId', userId);
			NXSendOneSignalToken(userId);
		});
	});
}
var NXIsOneSignalAvailable = 'unknown';
function NXOneSignalOnLoadError() {
	NXSendOneSignalToken(false, 'NX_ERROR_UNKNOWN');
	NXIsOneSignalAvailable = 'failed';
}
function NXOneSignalOnInit() {
	NXIsOneSignalAvailable = 'ready';
	if (Notification.permission === 'granted') {
		// Automatically subscribe user if deleted cookies and browser shows "Allow"
		OneSignal.registerForPushNotifications();
	}
	OneSignal.push(function() {
		OneSignal.on('subscriptionChange', function (isSubscribed) {
			if (isSubscribed) {
				NXSendOneSignalUid();
			} else {
				if (thisMovie('flash-app') && thisMovie('flash-app')['NXOneSignalNotificationChange_callback']) {
					thisMovie('flash-app')['NXOneSignalNotificationChange_callback'](false);
				}
			}
		});
	});
	OneSignal.push(function() {
		OneSignal.on('popoverAllowClick', function() {
			if (thisMovie('flash-app') && thisMovie('flash-app')['NXOneSignalSubscriptionChange_callback']) {
				thisMovie('flash-app')['NXOneSignalSubscriptionChange_callback'](true);
			}
		});
	});
	OneSignal.push(function() {
		OneSignal.on('popoverCancelClick', function() {
			if (thisMovie('flash-app') && thisMovie('flash-app')['NXOneSignalSubscriptionChange_callback']) {
				thisMovie('flash-app')['NXOneSignalSubscriptionChange_callback'](false);
			}
		});
	});
	OneSignal.push(function() {
		OneSignal.isPushNotificationsEnabled(function(isEnabled) {
			if (isEnabled) {
				NXSendOneSignalUid();
			} else {
				NXSendOneSignalToken(false, 'NX_PUSH_DISABLED');
			}
		});
	});
}

$(document).ready(function() {
	window.feedback = new Feedback.Controller(NXFeedbackOptions); //init zendesk

	$('#bg-selector .bg-selector').on('click', function(event) {
		var bid = $(this).data('bid');
		var $dom = $('body');
		$dom.removeClass('bg_color_0 bg_color_1 bg_color_2 bg_color_3 bg_color_4');
		$dom.addClass('bg_color_'+bid);
		$.post('api.php', {
			method: 'saveBackground',
			background_id: bid
		}, function(res) {
			if (res.status === 'success') {
				//empty
			} else {
				//empty
			}
		}, 'json');
	});

	/* social-tooltip */
	var timeDiff = NXtime - NXregTime;

	if( NXtooltip === 1 && timeDiff > 86400) {
		$('.social-tooltip').addClass('visible');
	}

	$('.social-tooltip-close').on('click', function() {

		$('.social-tooltip').removeClass('visible');
		var userId = NXG.GetCookie('user_id');
		$.post('api.php', {
			method: 'updateTooltip',
			user_id: userId
		}, function(res) {
			if (res.status === 'success') {
				//empty
			} else {
				//empty
			}
		}, 'json');

	});
	/* social-tooltip */
	$('.modal-delayed .close').click(function(e){
		$('.modal-delayed').hide();
		NXCallExtenal('NXUserEmailObtained', 0);
	});
});
