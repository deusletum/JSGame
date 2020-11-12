'use strict';
window.NXG = window.NXG || {};

var NXiFrameHasAnotherTab = false;
var NXTabMessageBroadcast;
if (window.localStorage) {
	NXTabMessageBroadcast = function(message) {
		window.localStorage.setItem('message', JSON.stringify(message));
		window.localStorage.removeItem('message');
	}
	window.localStorage.setItem('lastGameEnter', JSON.stringify({time: ((new Date()).getTime()), href: document.location.origin}));
	window.addEventListener('storage', function (event) {
		var data;
		if (event.key === 'lastGameEnter') {
			data = JSON.parse(event.newValue)
			if (data.href && data.href === document.location.origin) {
				NXiFrameHasAnotherTab = true;
				//nxg.getModule('pushd').disconnect();
			}
		} else if (event.key === 'message') {
			data = JSON.parse(event.newValue);
			if (data) {
				if (data.type === 'email_confirmed') {
					$('.top__menu-user-info').addClass('email_confirmed').removeClass('email_not_confirmed');
					$('.menu__popup-info.confirm').addClass('email_confirmed').removeClass('email_not_confirmed');
				}
			}
		}
	}, false);
} else {
	NXTabMessageBroadcast = function(message) {}
}

NXG.SetCookie = function(name, value, days) {
	var date;
	var expires = '';
	if (days) {
		date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = name + '=' + (value || '') + expires + '; path=/';
}
NXG.GetCookie = function(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for (var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}
		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}
	return null;
}
NXG.EraseCookie = function(name) {
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
NXG.ApiSend = function(_method, _data, _callback) {
	if (typeof callback !== 'function') {
		_callback = function(){};
	}
	_data = _data || {};
	_data.method = _method;
	$.post('api.php', _data, _callback, 'json');
};
NXG.SendButtonClicks = function(buttonName) {
	//NXPageMode
	var windows = {
		'confirm_email': 'confirmEmailPage',
		'new_password': 'resetPasswordPage',
		'profile': 'profile',
		'game': 'gameScreen',
		'registration': 'landingPage',
		'recovery': 'landingPage',
		'authentication': 'landingPage'
	};
	$.post('api.php', {
		method: 'buttonClicked',
		buttonName: buttonName,
		windowName: windows[NXPageMode]
	}, function(res) {
		//empty
	}, 'json');
};
NXG.cookieAccept = function() {
	$.post('api.php', {
		method: 'cookieAccept'
	}, function(res) {}, 'json');
};
NXG.AcceptCookieDisclaimer = function() {
	$('.modal-cookie').hide();
	NXG.SetCookie('cookie_alert_accepted', 'yes', 999999999);
	NXG.SendButtonClicks('cookieOk');
	NXG.cookieAccept();
	// NXG.ApiSend('cookieAccepted');
};
NXG.ChangeLanguage = function(lang) {
	/*
	var key;
	var text;
	var dom;
	var doms;
	NXLang = lang;
	NXSetCookie('language', lang, 999999999);

	try {
		doms = $('.l10n-text');
		for (var i = 0; i < doms.length; i++) {
			dom = doms[i] ;
			key = dom.dataset.l10nText;
			text = NXGetLocale(key);
			dom.innerHTML = text;
		}
		doms = $('.l10n-link');
		for (var i = 0; i < doms.length; i++) {
			dom = doms[i] ;
			key = dom.dataset.l10nLink;
			text = NXSupportLinks[NXLang][key];
			dom.attributes.href.value = text;
		}
	} catch(e) {
		//empty
	}
	$('html').attr('lang', lang);
	*/
	$.post('api.php', {
		method: 'changeLanguage',
		language: lang
	}, function(res) {
		var s = document.location.search;
		if (res.status === 'success') {
			if (s.match('hl='+NXLang)) {
				document.location.search = s.replace('hl='+NXLang, 'hl='+lang);
			} else {
				document.location.reload();
			}
		}
	}, 'json');
};

NXG.checkValidPass = function(password) {
	var isValid = true;

	if (password.val().length < 8) {
		password.parents('.holder').addClass('invalid');
		isValid = false;
	} else {
		password.parents('.holder').removeClass('invalid');
		isValid = password.val();
	}

	return isValid;
}

window.NXShowModalError = function(title, text, callback) {
	var modalError = $("#modalError");
	var modalErrorTitle = $("#modalError .title");
	var modalErrorTexts = $("#modalError .texts");
	var modalErrorClose = $("#modalError .close");
	var modalErrorButton = $("#modalError .buttons");

	modalError.toggleClass('show').toggle();
	modalErrorTitle.text(title);
	modalErrorTexts.text(text);
	if (typeof callback === 'function') {
		callback(data);
	}
};


window.NXShowConfirmEmail = function() {
	$('#popupAccount').addClass().show();
};


window.NXPWA = {};
NXPWA.deferredPrompt = null;
NXPWA.isStandalone = function() {
	return window.matchMedia('(display-mode: standalone)').matches;
}
NXPWA.сanBeInstalled = function() {
	return !!NXPWA.deferredPrompt;
};
NXPWA.requestUserAction = function() {
	if (!NXPWA.deferredPrompt) {
		NXCallExtenal('NXPWAWasInstalled', false);
		return;
	}
	NXPWA.deferredPrompt.prompt();
	NXPWA.deferredPrompt.userChoice
		.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			} else {
				console.log('User dismissed the A2HS prompt');
			}
			NXPWA.deferredPrompt = null;
			NXCallExtenal('NXPWAWasInstalled', choiceResult.outcome);
		});
}
window.addEventListener('beforeinstallprompt', function(ev) {
	NXPWA.deferredPrompt = ev;
	ev.preventDefault();
});



$('.currency-option').on('click', function() {
	var currencyValue = $(this).data('value');
	var userId = NXG.GetCookie('user_id');
	$.post('api.php', {
		method: 'updateUserCurrency',
		user_id: userId,
		currency: currencyValue
	}, function(res) {
		if (res.status === 'success') {
			$('#currencySelected').html(currencyValue);
			$('.currency-success-msg').text(NXGetLocale('SAVED') + '!');
			setTimeout(function() {
				$('.currency-success-msg').text('');
			}, 1000);
		} else {
			console.log(res);
		}
	}, 'json');
});

var NXTermsLinks = {
	'ru': {
		'terms': 'terms_ru.php',
		'policy': 'policy_ru.php'
	},
	'de': {
		'terms': 'terms.php',
		'policy': 'policy.php'
	},
	'fr': {
		'terms': 'terms.php',
		'policy': 'policy.php'
	},
	'it': {
		'terms': 'terms.php',
		'policy': 'policy.php'
	},
	'es': {
		'terms': 'terms.php',
		'policy': 'policy.php'
	},
	'zh-CN': {
		'terms': 'terms.php',
		'policy': 'policy.php'
	},
	'zh-TW': {
		'terms': 'terms.php',
		'policy': 'policy.php'
	},
	'en': {
		'terms': 'terms.php',
		'policy': 'policy.php'
	},
	'ja': {
		'terms': 'terms.php',
		'policy': 'policy.php'
	},
	'ko': {
		'terms': 'terms.php',
		'policy': 'policy.php'
	}
};
window.NXGetLocale = function(text) {
	if (NXLocales[text] !== undefined && NXLocales[text][NXLang] !== undefined) {
		return NXLocales[text][NXLang];
	}
	return text;
}

$(document).ready(function() {

	var topMenuBtn = $(".top__menu-btn");
	var footerMenuBtn = $(".footer__user-menu-btn");
	var topMenuPopup = $(".top__menu-popup-wrap");
	var popup = $(".top__menu-popup");
	var popupMsgLink = $(".popup__message-link");

	var langBtn = $(".top__menu-lang");
	var langPopupWrap = $(".menu__lang-popup-wrap");
	var footerLangPopupWrap = $(".footer__lang-popup-wrap");
	var mobileLangSelect = $('.mobile__menu-lang');

	var currBtn = $(".top__menu-currency");
	var currPopupWrap = $(".menu__currency-popup-wrap");
	var currSelect = $("#currSelect");
	var langSelect = $("#langSelect");
	var selectLangFooter = $("#selectLangFooter");

	var langBtnMobile = $(".lang-btn--mobile");
	var currBtnMobile = $(".currency-btn--mobile");
	var langMenuMobile = $(".menu__lang-wrap");
	var currMenuMobile = $(".menu__currency-wrap");
	var listLangItem = $(".list-lang-item");
	var currLangItem = $(".list-lang-item");

	var enterPinForm = $("#enterPin");

	var modalError = $("#modalError");
	var modalErrorTitle = $("#modalError .title");
	var modalErrorTexts = $("#modalError .texts");
	var modalErrorClose = $("#modalError .close");
	var modalErrorButton = $("#modalError .buttons");

	var popupAccount = $("#popupAccount");
	var popupAccountClose = $("#popupAccount .close");

	var anchorLink = $(".menu__list-link");
	var scrollTop = $('#scrollTop');

	//anchor menu links
	anchorLink.click(function (e) {
		e.preventDefault();
		var elementClick = $(this).attr("href");
		var target = $(elementClick);
		$('.user__page-vue_holder').hide();
		target.show();
		// $('body,html').animate({
		// 	scrollTop: target.offset().top - 150
		// }, 1000);
		return false;
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			scrollTop.fadeIn();
		} else {
			scrollTop.fadeOut();
		}
	});
	//scrollTop button
	scrollTop.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

	modalErrorClose.click(function(e){
		e.preventDefault();
		modalError.toggleClass('show').toggle();
	});

	modalErrorButton.click(function(e){
		e.preventDefault();
		modalError.toggleClass('show').toggle();
	});

	topMenuBtn.click(function(e){
		e.preventDefault();
		topMenuPopup.toggleClass('show').toggle();
		NXG.SendButtonClicks('nicknameMenu');
	});

	footerMenuBtn.click(function(e){
		e.preventDefault();
		topMenuPopup.toggleClass('show').toggle();
		NXG.SendButtonClicks('nicknameMenu');
	});

	topMenuPopup.click(function(e){
		if($(e.target).closest(popup).length) {
			return;
		}
		e.preventDefault();
		topMenuPopup.hide();
	});

	popupMsgLink.click(function(e){
		e.preventDefault();
		topMenuPopup.toggleClass('show').toggle();
	});

	popupAccountClose.click(function(e){
		e.preventDefault();
		popupAccount.hide();
	});

	langBtn.click(function(e){
		langPopupWrap.toggleClass('show').toggle();
		var langOffset = langSelect.offset();
		$(".menu__lang-popup").css('left', langOffset.left - 100);
		NXG.SendButtonClicks('langChange');
	});

	selectLangFooter.click(function(e){
		footerLangPopupWrap.toggleClass('show').toggle();
		var langOffset = selectLangFooter.offset();
		$(".footer__lang-popup").css('left', langOffset.left);
		NXG.SendButtonClicks('langChange');
	});

	langPopupWrap.click(function(e){
		if($(e.target).closest(langPopupWrap).length) {
			return;
		}
		langPopupWrap.hide();
	});

	footerLangPopupWrap.click(function(e){
		footerLangPopupWrap.hide();
	});

	mobileLangSelect.click(function(e){
		langPopupWrap.toggleClass('show').toggle();
		NXG.SendButtonClicks('langChange');
	});

	currBtn.click(function(e){
		currPopupWrap.toggleClass('show').toggle();
		var currOffset = currSelect.offset();
		$(".menu__currency-popup").css('left', currOffset.left - 200);
		NXG.SendButtonClicks('currencyChange');
	});

	currPopupWrap.click(function(e){
		if($(e.target).closest(currPopupWrap).length) {
			return;
		}
		currPopupWrap.hide();
	});

	langBtnMobile.click(function(e){
		e.preventDefault();
		langMenuMobile.toggleClass('show').toggle('ease');
	});

	currBtnMobile.click(function(e){
		e.preventDefault();
		currMenuMobile.toggleClass('show').toggle('ease');
	});

	listLangItem.click(function(e){
		langMenuMobile.hide();
	});

	currLangItem.click(function(e){
		currMenuMobile.hide();
	});

	$('.menu__popup .logout').on('click', function() {
		$.post('api.php', {
			method: 'logout'
		}, function(res) {
			if (res.status === 'success') {
				document.location.href = '.';
			}
		}, 'json');
	});

	$('.logout_btn').on('click', function() {
		$.post('api.php', {
			method: 'logoutAll'
		}, function(res) {
			if (res.status === 'success') {
				document.location.href = '.';
			}
		}, 'json');
	});

	$('.menu__popup-info.confirm').on('click', function() {
		$('#popupAccount').addClass().show();
		NXG.SendButtonClicks('menuEmailConfirm');
	});


	$('.doclink').click(function(e){
		var mode = e.target.dataset.link;
		e.preventDefault();
		if (!mode) {
			return;
		}
		if (NXTermsLinks[NXLang] && NXTermsLinks[NXLang][mode]) {
			$.get(NXSiteUrl+'terms/' + NXTermsLinks[NXLang][mode], function(data) {
				$('.modalbox .wrapper').html(data);
				$('.modalbox').show();
				$('.modalbox .wrapper').scrollTop(0);
			});
		}
		if (mode === 'policy') {
			NXG.SendButtonClicks('privacy');
		} else if (mode === 'terms') {
			NXG.SendButtonClicks('terms');
		}
	});

	$('.modalbox .container').click(function(ev) {
		if (ev.target.classList.contains('container')) {
			$('.modalbox').hide();
		}
	});
	$('.modalbox .close').click(function(ev) {
		if (ev.target.classList.contains('container')) {
			$('.modalbox').hide();
		}
		$('.modalbox').hide();
	});


	/* check form fields */

	$('#subscribeForm .button').on('click', function(event) {
		var checkbox1 = $('#subscribeForm .checkbox1').prop('checked');
		var checkbox2 = $('#subscribeForm .checkbox2').prop('checked');
		$.post('api.php', {
			method: 'saveSubscriptions',
			email_subscription: checkbox1,
			email_subscription_poll: checkbox2
		}, function(res) {
			if (res.status === 'success') {
				$('.currency-success-msg').text(NXGetLocale('SAVED') + '!');
				setTimeout(function() {
					$('.currency-success-msg').text('');
				}, 1000);
			} else {
				console.log(res);
			}
		}, 'json');
	});

	var sendMailBtn = $("#confirmMailBtn");
	var resendMailBtn = $("#resendMailBtn");
	var sendMailText = $("#sendMailText");
	var postSendText = $('#enterEmail .info-centered');

	sendMailBtn.on('click', function(e) {
		e.preventDefault();
		var field = $("#confirmEmail");
		var fieldValue = $("#confirmEmail").val();
		var error = 0;
		if(!fieldValue){
			field.css('border', 'red 1px solid');
			error = 1;
		}
		else{
			field.css('border', '#d4d4d4 1px solid');
			sendMailBtn.text(NXGetLocale('Send'));
			$(".errorMessenger").html(' ').fadeOut("slow");
		}

		if(error === 0){
			$.post('api.php', {
				method: 'sendConfirmEmail',
				email: fieldValue,
			}, function(res) {
				if (res.status === 'success') {
					sendMailBtn.css('display', 'none');
					sendMailText.css('display', 'block');
					resendMailBtn.css('display', 'block');
					sendMailBtn.text('Sending...');
					postSendText.text(NXGetLocale('The letter has been sent'));
					field.css('border', 'gray 1px #d4d4d4');
				}
			}, 'json');
		} else if(error === 1) {
			var err_text = "Wrong e-mail";
			$(".errorMessenger").html(err_text).fadeIn("slow");
			return false;
		}
	});

	resendMailBtn.on('click', function(e) {
		e.preventDefault();
		var fieldValue = $("#confirmEmail").val();
		$.post('api.php', {
			method: 'sendConfirmEmail',
			email: fieldValue,
		}, function(res) {
			if (res.status === 'success') {
				$(this).toggleClass('disabled').attr("disabled", "disabled");
			}
		}, 'json');
	});

	enterPinForm.on("submit", function(){
		var field = new Array("pin");

		var error=0;
		$(this).find(":input").each(function() {
			for(var i=0;i<field.length;i++){
				if($(this).attr("name")==field[i]){

					if(!$(this).val()){// если в поле пустое
						$(this).css('border', 'red 1px solid');
						error=1;

					}
					else{
						$(this).css('border', '#d4d4d4 1px solid');
					}

				}
			}
		});

		if(error==0){
			return true;
		}
		else{
			if(error==1) var err_text = "Wrong e-mail";
			$(".errorMessenger").html(err_text);
			$(".errorMessenger").fadeIn("slow");
			return false;
		}
	});

	$('#changePass .button__submit').on("click", function(e){
		e.preventDefault();

		var oldPassField = $('#changePass input[name=passOld]');
		var newPassField = $('#changePass input[name=passNew]');
		var newPassField2 = $('#changePass input[name=passNew2]');
		var errInfo = $('#changePass .account__body-info');

		oldPassField.css("border", "1px solid #d4d4d4");
		newPassField.css("border", "1px solid #d4d4d4");
		newPassField2.css("border", "1px solid #d4d4d4");

		var passOld = NXG.checkValidPass(oldPassField);
		var passNew = NXG.checkValidPass(newPassField);
		var passNew2 = NXG.checkValidPass(newPassField2);
		var passOldVal = oldPassField.val();
		var passNewVal = newPassField.val();
		var passNew2Val = newPassField2.val();

		if(!passOld) {
			errInfo.html(NXGetLocale('Incorrect password'));
			errInfo.css("color", "#c0392b");
			oldPassField.css("border", "1px solid #c0392b");
		} else if(!passNew) {
			errInfo.html(NXGetLocale('REG_CREATE_A_PASSWORD') + ' ' + NXGetLocale('8-30 alphanumeric characters'));
			errInfo.css("color", "#c0392b");
			newPassField.css("border", "1px solid #c0392b");
		} else if(!passNew2) {
			errInfo.html(NXGetLocale('Repeat new password') + ' ' + NXGetLocale('8-30 alphanumeric characters'));
			errInfo.css("color", "#c0392b");
			newPassField2.css("border", "1px solid #c0392b");
		} else if(passNewVal !== passNew2Val) {
			errInfo.html(NXGetLocale('Passwords do not match'));
			errInfo.css("color", "#c0392b");
			newPassField.css("border", "1px solid #c0392b");
			newPassField2.css("border", "1px solid #c0392b");
		} else if(passOldVal === passNewVal) {
			errInfo.html(NXGetLocale('OLD_AND_NEW_PASS_SHOULD_NOT_MATCH'));
			errInfo.css("color", "#c0392b");
			newPassField.css("border", "1px solid #c0392b");
			newPassField2.css("border", "1px solid #c0392b");
		} else {
			oldPassField.css("border", "1px solid #d4d4d4");
			newPassField.css("border", "1px solid #d4d4d4");
			newPassField2.css("border", "1px solid #d4d4d4");
			$.post('api.php', {
				method: 'changePassword',
				old_password: passOldVal,
				new_password: passNewVal,
				confirm_password: passNew2Val
			}, function(res) {
				if (res.status !== 'success') {
					console.log(res);
					errInfo.html(NXGetLocale(res.data.message));
					errInfo.css("color", "#c0392b");
				} else {
					if(res.data.message === 'Old password does not match') {
						errInfo.html(NXGetLocale('OLD_PASS_DONT_MATCH'));
						errInfo.css("color", "#c0392b");
					} else {
						errInfo.css("color", "#5da244");
						errInfo.html(NXGetLocale('Done'));
						oldPassField.val('');
						newPassField.val('');
						newPassField2.val('');
					}
				}
			}, 'json');
		}
	});

	$('#changePass input[name=passOld]').keyup(function(ev){
		if(ev.keyCode === 13){
			$('#changePass .button__submit').click();
		}
	});
	$('#changePass input[name=passNew]').keyup(function(ev){
		if(ev.keyCode === 13){
			$('#changePass .button__submit').click();
		}
	});
	$('#changePass input[name=passNew2]').keyup(function(ev){
		if(ev.keyCode === 13){
			$('#changePass .button__submit').click();
		}
	});

	if(window.NXErrorStatus !== undefined) {
		if (window.NXErrorStatus === 'REG_EMAIL_ALREADY_EXISTS') {
			modalError.toggleClass('show').toggle();
			modalErrorTitle.text(NXGetLocale('Error'));
			modalErrorTexts.text(NXGetLocale('There is already an account registered to this e-mail'));
		} else if (window.NXErrorStatus === 'User not found') {
			modalError.toggleClass('show').toggle();
			modalErrorTitle.text(NXGetLocale('Error'));
			modalErrorTexts.text(NXGetLocale('User not found'));
		} else {
			modalError.toggleClass('show').toggle();
			modalErrorTitle.text('Error');
			modalErrorTexts.text(NXGetLocale('Unknown error'));
		}
	}

	/* END check form fields */

	if (NXG.GetCookie('cookie_alert_accepted') !== 'yes') {
		$('.modal-cookie').show();
	}

	if (NXPageMode === 'confirm_email') {
		NXTabMessageBroadcast({
			'type': 'email_confirmed'
		});
	}

});
