$(document).ready(function(){
	// hide error reportings
	$('.error-null').hide();
	$('.error-invalid').hide();
	
	
	//submit the form
	$('.submit-btn').on('click', function(e) {
					
		e.preventDefault();
		
		var namefield = $('form input[name=Name]').val();
		var emailfield = $('form input[name=EmailAddress]').val();
		var phonefield = $('form input[name=PhoneNumber]').val();
	
		if( namefield != null && phonefield !=null && emailfield!= null && isValidEmailAddress(emailfield)) {
			var form = $('.mh-form'),
				url = 'https://script.google.com/macros/s/AKfycbxlAyTgA1ovfztBhG5eUMIDomDiu5Ct-qlR-wGKJf4NaMKB6WZJ/exec';
			

			var jqxhr = $.ajax({
				url: url,
				method: "GET",
				dataType: "json",
				data: form.serialize()
			}).success(
				$('#emailCapture').modal('hide'),
				$('#emailCapture').on('hidden.bs.modal', function () {
				  	$(location).attr('href', 'https://meetme.so/craigcoaching');
				})
			);
			
			
			
		} else {
			if(namefield == null){
				$('.error-null').show();
				$('form input[name=Name]').addClass('.mh-form-error');
			}
			
			if(phonefield == null){
				$('.error-null').show();
				$('form input[name=PhoneNumber]').addClass('.mh-form-error');
			}
			
			if(emailfield == null){
				$('.error-null').show();
				$('form input[name=EmailAddress]').addClass('.mh-form-error');
			}
			if(!isValidEmailAddress(emailfield)) {
				$('.error-invalid').show();
				$('form input[name=EmailAddress]').addClass('.mh-form-error');
			}
			
		}
		
	});	

});


function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
	return pattern.test(emailAddress);
}

function isBlank(input) {
	if(input != null){
		return true;
	} else {
		return false;
	}
}
	

/*----------------------------------------------------------------
	ROTATE TEXT EFFECT GENERATOR
	
-----------------------------------------------------------------*/

$(".rotate").textrotator({
  animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 2000 // How many milliseconds until the next word show.
});


