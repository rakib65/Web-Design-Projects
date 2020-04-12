$(document).ready(function(){
	$('.ar-form fieldset:first-child').fadeIn('slow');
	$('.error-msg').hide();
	$('.error-msg2').hide();
	
	$('.ar-form input[type="text"]').on('focus', function () {
        	$(this).removeClass('input-error');
    	});
	
	$('.btn-next').on('click', function(){
		var parent_fieldset = $(this).parents('fieldset');
		var next_step1 = false;
		var next_step2 = false;
		parent_fieldset.find('select').each(function(){
			if($(this).val() == ""){
				$(this).addClass('input-error');
				next_step1 = false;
				$('.error-msg').show();
			}else{
				$(this).removeClass('input-error');
				next_step1 = true;
				$('.error-msg').hide();
			}
		});
		
		var radio1 = $('input[name=outOfWork]:checked').val();
		var radio2 = $('input[name=workPeriod]:checked').val();
		var radio3 = $('input[name=disabilityBenifit]:checked').val();
		var radio4 = $('input[name=attorny]:checked').val();
		var radio5 = $('input[name=treatment]:checked').val();
		
		if(!radio1 || !radio2 || !radio3 || !radio4 || !radio5){
			next_step2 = false;
			$('.error-msg').show();
		}else{
			next_step2 = true;
			$('.error-msg').hide();
		}
		
		if(next_step1 == true && next_step2 == true){
			$('.ar-form fieldset:first-child').fadeOut(400,function(){
				$(this).next().fadeIn();
			});
		}
		
	}); // end of button click(next)
	
	// submit
	$('.ar-form').on('submit', function(e){
		
		$(this).find('input[type="text"],input[type="email"], input[type="tel"],input[type="number"]').each(function(){
			if($(this).val() == ""){
				e.preventDefault();
				//$(this).addClass('input-error');
				$('.error-msg2').show();
			}else{
				//$(this).removeClass('input-error');
				$('.error-msg2').hide();
			}																						
		});
	}); // end of form submit
}); // end of document()