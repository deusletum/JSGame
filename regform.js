'use strict';
window.NXG = window.NXG || {};

NXG.checkValidMail = function(email) {
	var isValid = true;
	var re;

	re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	$('.registration .holder.email .error').html('');
	if (!re.test(String(email.val()).toLowerCase())) {
		email.parents('.holder').addClass('invalid');
		isValid = false;
	} else {
		email.parents('.holder').removeClass('invalid');
		isValid = email.val();
	}

	return isValid;
}
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

NXG.doClickable = function(link) {
	if (link) {
		$('.page').removeClass('visible');
		$('.page.'+link).addClass('visible');
		window.history.pushState(null, null, '?m='+link);
		if (link === 'registration') {
			$('.registration .holder.password').addClass('invisible');
			$('.registration .holder.email').removeClass('invisible');
			$('.registration .holder.play').addClass('hidden');
			$('.registration .holder.next').removeClass('hidden');
			NXG.SendButtonClicks('register');
		} else if (link === 'authentication') {
			NXG.SendButtonClicks('login');
		}
	}
	return false;
};

NXG.onRegistrationSuccess = function(data, redirectUrl) {
	if (NXDelayedRegistration) {
		NXDelayedRegistration = false;
		NXCallExtenal('NXUserEmailObtained', 1);
		$('.header__top-menu .delayedSignUp').hide();
		$('.header__top-menu .top__menu-btn').css('display', 'flex');
		$('.header__top-menu .user__full-name').html(data.title);
		$('.user__info-fullname').html(data.title);
		$('#confirmEmail').val(data.title);
		$('.modal-delayed').hide();
		fbq('trackCustom', 'delayedSignUpComplete');

		// Аккаунт 515-832-8742
		gtag('event', 'conversion', {
			'send_to': 'AW-847225030/QCxLCOmqnZEBEMbB_pMD',
			'event_callback': function(){}
		});

		// Аккаунт 984-340-6488
		gtag('event', 'conversion', {
			'send_to': 'AW-622778268/GZ1oCNSPhuABEJyv-6gC',
			'event_callback': function(){}
		});
		
		gtag('event', 'delayed_reg_completed', {
			'event_category': 'engagement',
			'event_label': data.registrationType
		});
		_tfa.push({notify: 'event', name: 'delayedSignUpComplete', id: 1171685});
		ym(49488076, 'reachGoal', 'DelayedSignUpComplete');
	} else {
		NXG.SetCookie('cookie_alert_accepted', 'yes', 999999999);
		if(redirectUrl === 'default') {
			document.location.reload();
		} else {
			document.location.href = redirectUrl;
		}
	}
}

$(document).ready(function() {

	$('input.input').on('keyup', function(ev) {
		$(ev.currentTarget).parents('.holder.invalid').removeClass('invalid');
	});

	$('input[name=email]').on('change', function(ev) {
		NXG.checkValidMail($(ev.currentTarget));
	});
	$('input[name=password]').on('change', function(ev) {
		var el = $(ev.currentTarget);
		var isHidden = $(ev.currentTarget).parents('.holder.password').hasClass('invisible');
		if (!isHidden) {
			NXG.checkValidPass(el);
		}
	});

	$('.agreement input[type=checkbox]').on('change', function(ev) {
		if (ev.target.checked) {
			$('.registration .holder.next .text').removeClass('disabled');
			$('.registration .holder.play.reg .button').removeClass('disabled');
		} else {
			$('.registration .holder.next .text').addClass('disabled');
			$('.registration .holder.play.reg .button').addClass('disabled');
		}
	});

	//login
	$('.authentication .holder.play.login .button').on('click', function(ev) {
		ev.preventDefault();
		var email = NXG.checkValidMail($('.authentication input[name=email]'));
		var password = NXG.checkValidPass($('.authentication input[name=password]'));
		var remember_user;
		$('#rememberUser').prop('checked') === true ? remember_user = 1 : remember_user = 0;
		
		if (email && password) {
			ev.currentTarget.classList.add('disabled');
			$.post('api.php', {
				method: 'authentication',
				email: email,
				password: password,
				remember_user: remember_user
			}, function(res) {
				if (res.status !== 'success') {
					if(res.message === 'Incorrect password') {
						$('.authentication .holder.password .error').html(NXGetLocale(res.message));
						$('.authentication .holder.password').addClass('invalid');
					} else if(res.message === 'User not found') {
						$('.authentication .holder.email .error').html(NXGetLocale(res.message) + '!' + ' ' + '<span class="error-link error-link-reg clickable" onclick="NXG.doClickable(\'registration\')">' + NXGetLocale('SIGN_UP') + '</span>');
						$('.authentication .holder.email').addClass('invalid');
					} else {
						$('.authentication .holder.email .error').html(NXGetLocale(res.message));
						$('.authentication .holder.email').addClass('invalid');
					}
					ev.currentTarget.classList.remove('disabled');
				} else {
					NXG.SetCookie('cookie_alert_accepted', 'yes', 999999999);
					document.location.reload();
				}
			}, 'json');
		}
		return false;
	});

	$('.authentication input[name=password]').keyup(function(ev){
		if(ev.keyCode === 13){
			$('.authentication .holder.play.login .button').click();
		}
	});

	$('.authentication input[name=email]').keyup(function(ev){
		if(ev.keyCode === 13){
			$('.authentication .holder.play.login .button').click();
		}
	});


	//registration
	$('.registration .holder.next .text').on('click', function(ev) {
		ev.preventDefault();
		
		var checkbox = $('.agreement input[type=checkbox]');
		checkbox.prop("checked", true);

		if (ev.currentTarget.classList.contains('disabled')) {
			return;
		}
		var email = NXG.checkValidMail($('.registration input[name=email]'));

		NXG.SendButtonClicks('regFormNext');

		if (!email) {
			$('.registration .holder.email .error').html(NXGetLocale('Incorrect e-mail'));
			$('.registration .holder').addClass('invalid');
			ev.currentTarget.classList.remove('disabled');
			return false;
		} else {
			ev.currentTarget.classList.add('disabled');
			$.post('api.php', {
				method: 'checkEmail',
				email: email
			}, function(res) {
				if (res.status !== 'success') {
					$('.registration .holder.email .error').html(NXGetLocale(res.message));
					$('.registration .holder').addClass('invalid');
				} else {
					if (res.data.result) {
						$('.registration .holder.email .error').html(NXGetLocale('REG_EMAIL_ALREADY_EXISTS'));
						$('.registration .holder').addClass('invalid');
					} else {
						$('.registration .holder.password').removeClass('invisible');
						$('.registration .holder.email').addClass('invisible');
						$('.registration .holder.play').removeClass('hidden');
						$('.registration .holder.agreement').removeClass('hidden');
						$('.registration .holder.next').addClass('hidden');
					}
				}
				ev.currentTarget.classList.remove('disabled');
			}, 'json');

		}
	});

	$('.registration .holder.play.reg .button').on('click', function(ev) {
		ev.preventDefault();
		if (ev.currentTarget.classList.contains('disabled')) {
			return;
		}
		var method = 'registration';
		var email = $('.registration input[name=email]').val();
		var password = NXG.checkValidPass($('.registration input[name=password]'));

		NXG.SendButtonClicks('regFormPlay');

		if (!password) {
			return false;
		}
		if (NXDelayedRegistration) {
			method = 'delayRegistration';
		}
		if (email && password) {
			ev.currentTarget.classList.add('disabled');
			$.post('api.php', {
				method: method,
				email: email,
				password: password
			}, function(res) {
				if (res.status !== 'success') {
					$('.registration .holder.email .error').html(NXGetLocale(res.message));
					$('.registration .holder').addClass('invalid');
					ev.currentTarget.classList.remove('disabled');
				} else {
					NXG.onRegistrationSuccess(res.data, 'default');
				}
			}, 'json');
		}
	});

	$('.registration input[name=email]').keyup(function(ev){
		if(ev.keyCode === 13){
			$('.registration .holder.next .text').click();
		}
	});

	$('.registration input[name=password]').keyup(function(ev){
		if(ev.keyCode === 13){
			$('.registration .holder.play.reg .button').click();
		}
	});

	//recover password
	$('.recovery .holder.reset .button').on('click', function(ev) {
		ev.preventDefault();
		if (ev.currentTarget.classList.contains('disabled')) {
			return;
		}
		var email = NXG.checkValidMail($('.recovery input[name=email]'));
		if (!email) {
			return false;
		}
		ev.currentTarget.classList.add('disabled');
		$.post('api.php', {
			method: 'recoveryPassword',
			email: email
		}, function(res) {
			if (res.status !== 'success') {
				if(res.message === 'User not found') {
					$('.recovery .holder.email .error').html(NXGetLocale(res.message) + '<span class="error-link clickable" onclick="NXG.doClickable(\'registration\')">' + NXGetLocale('Sign Up') + '</span>');
					$('.recovery .holder.email').addClass('invalid');
				} else {
					$('.recovery .holder.email .error').html(NXGetLocale(res.message));
					$('.recovery .holder').addClass('invalid');
					ev.currentTarget.classList.remove('disabled');
				}
			} else {
				$('.recovery .holder.agreement .text').html(NXGetLocale('The letter has been sent'));
				$('.recovery .holder.reset .button').html(NXGetLocale('Resend'));
				ev.currentTarget.classList.remove('disabled');
			}
		}, 'json');
	});

	$('.recovery input[name=email]').keyup(function(ev){
		if(ev.keyCode === 13){
			$('.recovery .holder.reset .button').click();
		}
	});

	//new password
	$('.new-password .button__submit').on('click', function(ev) {
		ev.preventDefault();
		var url_string = window.location.href;
		var url = new URL(url_string);
		var recovery_hash = url.searchParams.get('recovery_hash');
		if (ev.currentTarget.classList.contains('disabled')) {
			return;
		}
		var password = NXG.checkValidPass($('.new-password input[name=password]'));
		var confirm_password = NXG.checkValidPass($('.new-password input[name=confirm_password]'));
		if (!password) {
			$('.new-password .error').addClass('invalid');
			return false;
		}
		if (password && confirm_password) {
			ev.currentTarget.classList.add('disabled');
			$.post('api.php?recovery_hash=' + recovery_hash, {
				method: 'setNewPassword',
				password: password,
				confirm_password: confirm_password
			}, function(res) {
				if (res.status !== 'success') {
					$('.new-password .error').html(NXGetLocale(res.message));
					$('.new-password .error').addClass('invalid');
					ev.currentTarget.classList.remove('disabled');
				} else {
					document.location.href = '.';
				}
			}, 'json');
		}
	});

	$('.new-password input').keyup(function(ev){
		if(ev.keyCode === 13){
			$('.new-password .button__submit').click();
		}
	});

	$('.header .lang .current').click(function(e){
		$('.header .lang .wrapper').toggle();
	});

	$('.header .lang .wrapper').click(function(e){
		$('.header .lang .wrapper').hide();
	});

	$('.modalbox .container').click(function(e){
		if (e.target.classList.contains('container')) {
			$('.modalbox').hide();
		}
	});

	$('.modalbox .close').click(function(e){
		$('.modalbox').hide();
	});

	$('.inputs .clickable').on('click', function(ev) {
		var ref = document.location.search;
		var link = ev.currentTarget.dataset.link;
		ev.preventDefault();
		NXG.doClickable(link);
		return false;
	});

	$('.ice-form-btn').on('click', function() {
		$('.ice-textbox-wrap').removeClass('visible');
		$('.registration').toggleClass('visible');
	});

});
