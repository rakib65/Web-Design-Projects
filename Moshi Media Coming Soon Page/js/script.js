// JavaScript Document

$(document).ready(function(){
	
	
	if($(window).width()>768){
			
			$('#fullpage').fullpage({
				autoScrolling: false
		//anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		//menu: '#myMenu'

		});
	}
	
	// hide erroer messages 
	$('.cnamerequired').hide();
	$('.cmailrequired').hide();
	$('.cmailvalid').hide();
	
	$('.csuccess').hide();
	$('.cfail').hide();
	
	//submit contact form
	$('#contactForm').submit(function(ev){
		ev.preventDefault();
		
		var cname = $('input[name="NameC"]').val();
		var cmail = $('input[name="EmailC"]' ).val();
		var message = $('input[name="Message"]').val();
		
		var cnameError = true;
		var cmailError = true;
		
		if(cname == ''){
			$('.cnamerequired').show();
			cnameError = true;
		} else{
			$('.cnamerequired').hide();
			cnameError = false;
		}
		
		if(cmail == ''){
			$('.cmailrequired').show();
			 cmailError = true;
		}else{
			$('.cmailrequired').hide();
			
			if(validateEmail(cmail) == true){
				$('.cmailvalid').hide();
				cmailError = false;
			} else{
				$('.cmailvalid').show();
				cmailError = true;
			}
		}
		
		if(cnameError == false && cmailError == false){
			var cform = $('#contactForm');
			var formdata = cform.serialize();
			var url = 'mail.php';
			
			$.ajax({
				type: "POST",
				url: url,
				data: formdata
			}).done(function(){
				$('.csuccess').show();
				
				$('input[name="NameC"]').val('');
				$('input[name="EmailC"]' ).val('');
				$('input[name="Message"]' ).val('');
				
			}).fail(function(){
				$('.cfail').show();
			});
		}
		
		
		
		
	});
	
function validateEmail(sEmail) {

    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (filter.test(sEmail)) {
        return true;
    }
    else {

        return false;
    }
}

	

	
});


