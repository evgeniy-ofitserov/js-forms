$(document).ready(function() {

	console.log('1) - Докумет НTML - загружен !');
	
	(function(){
		console.log('2) - Модуль объект RegValid - запущен!');
       var RegFormValid = {

        isValid: true,

        init: function(){

            this._setupRegForm();

        },
        _setupRegForm: function(){
            $('#reg-form').on('submit',RegFormValid._validRegForm).on('submit', RegFormValid._sendRegForm);
            console.log('3) - Слушатель - Ок! ');
        },
        
        _validRegForm: function (e) {
            e.preventDefault();
            form = $(this),
            inputs = form.find('input'),
            valid = true;
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
                                    valid = false;
                                    erorr.fadeIn();
									errorEmailFormat.remove();
									errorPass.remove();
									errorEmail.remove();
									console.log('email - error');
								}else{
									console.log('email - OK');
									valid = true;
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
                            errorPass.fadeIn();
							console.log('Пароль не ок!');
							valid = false;
						}
					}

					input.on('focus', function(){
						
						errorPass.fadeOut();

					});
				}


			});


            RegFormValid.isValid = valid;

          },


          _sendRegForm: function(){
				
            if ( RegFormValid.isValid === true ) {
                $('form').unbind('submit').submit();
                console.log('Сессия пользователя - ОK');
            } else {
                valid = false;
                console.log('Сессия FAILED!');
            }

        

    },

        };


		RegFormValid.init()

	}());


});