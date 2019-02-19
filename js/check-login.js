$(document).ready(function() {

	console.log('1) - Докумет НTML - загружен !');
	
	(function(){
		console.log('2) - Модуль объекта loginFormValid - запущен!');

		var loginFormValid = {


			isValid: true,

			init: function(){

				this._setupLoginForm();

			},
			_setupLoginForm: function(){
				$('#form-login').on('submit', loginFormValid._validForm).on('submit', loginFormValid._sendEnter);
				console.log('3) - Следун - запущен! ');
			},


			_validForm: function(e){
				e.preventDefault();
				form = $(this),
				inputs = form.find('input'),
				valid = true;

				//console.log(inputs.val());
			$.each(inputs, function (index, val) { 
				 
				var input = $(val),
					value = input.val().trim(),

					// Errors 
					erorr = form.find('.notify'),
					errorEmail = form.find('.error-email'),
					errorEmailFormat = form.find('.error-email-form'),
					errorPass = form.find('.error-pass'),
					enterEmailPass = form.find('.enter-email--pass'),
					errorEmailPass = form.find('.error-email--pass');
					// console.log('value '+value);

				if (value.length === 0) {
					errorEmail.fadeIn();
					errorPass.fadeIn();
					valid = false;
				}
				if (input.attr('type') === 'email') {

					if(value !== ''){
						var pattern = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;
						if (pattern.test(value)) {
							valid = true;
							errorEmailFormat.remove();
							errorPass.remove();
							errorEmail.remove();
							console.log('Емаил валидный!');	
								
							


								if (value === 'mail@mail.ru') {
									valid = true;
									console.log('email - Ok');
								}else{
									console.log('email - error');
									erorr.fadeIn();
									errorEmailFormat.remove();
									errorPass.remove();
									errorEmail.remove();
									valid = false;
								}					
						}else{
							console.log('Емайл не валидный');
							valid = false;
							errorEmailFormat.fadeIn();
							errorEmail.remove();
						}


					}
	


					input.on('focus', function(){
						errorEmailPass.fadeOut();
						enterEmailPass.fadeOut();
						errorEmail.fadeOut();
						errorEmailFormat.fadeOut();


					});
				}



				if (input.attr('type') === 'password') {

					if (value !== '') {
						var patternPass = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i;
						if (patternPass.test(value)){
							valid = true;
							console.log('пароль - ОK!');
							
						}else{
							console.log('Пароль не ок!');
							valid = false;
						}
						if (value === 'Javascript2019') {
							valid = true;
							console.log('pass - Ok');
						}else{
							errorEmailPass.fadeIn();
							valid = false;
							console.log('Неверный пароль');
							
						}

					}

					input.on('focus', function(){
						
						errorPass.fadeOut();

					});
				}


			});				


				loginFormValid.isValid = valid;
			},
			_sendEnter: function(){
				
					if ( loginFormValid.isValid === true ) {
						$('form').unbind('submit').submit();
						console.log('Сессия пользователя - ОK');
					} else {
						valid = false;
						console.log('Сессия FAILED!');
					}

				

			},
		
		};

		loginFormValid.init()

	}());


});