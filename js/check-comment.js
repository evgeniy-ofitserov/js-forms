
 $(document).ready(function(){

	console.log('1) - Докумет НTML - загружен !');
		(function(){       

	   console.log('2) - Модуль объекта commentValid - запущен!');

	   var commentValid = {	
		   
			isValid: true, 
   
			init: function(){

				this._setupCommentForm();

				console.log("3) - Вызов внутренних функций init: - запущен!");

			},
   

			_setupCommentForm: function(){

			   $('#comment-add').on('submit', commentValid._commentValidText).on('submit', commentValid._commentSend);

			},
   
			_commentValidText: function(e){
				e.preventDefault();
				var textarea = $(this),
				textareas = textarea.find('textarea'),
			   valid = true;
   

				$.each(textareas, function (index, val) { 
					var textarea = $(val),
					value = textarea.val().trim(),
					error = $('.notify');


					console.log('Найден блок notify: '+error); 

					if (value.length === 0) {
						error.fadeIn();
						valid = false;	
				   }else if(value.length === 1){
						errorTo = error.text('Комментарий не должен состоять из одного символа');
					   errorTo.fadeIn();
					   valid = false;  
				   }else{
					   error.fadeOut();                             
					   console.log('Вы ввели: ' +textareas.val());
						valid = true; 
					}
								   
			   textareas.on('keydown', function(){
				   error.fadeOut(1000);
				  
				});


		   });

		   commentValid.isValid = valid;
	   },


		_commentSend: function(){
		   
			if(commentValid.isValid === true){
				$('form').unbind('submit').submit();
				console.log('Комментарий отправлен!');
			} else{
			   console.log('Комментарий не отправлен!');
	   }
	   },

		   
	   };
   

	   commentValid.init();
   
   
   
	   
	}());
   
   
});


