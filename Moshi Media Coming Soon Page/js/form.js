// JavaScript Document
$(document).ready(function(){
	
	$('.lnamerequired').hide();
	$('.bdrequired').hide();
	$('.bdinvalid').hide();
	$('.lmailrequired').hide();
	$('.lmailvalid').hide();
	$('.lwarequired').hide();
	$('.lytrequired').hide();
	$('.lytvalid').hide();
	$('.lsuccess').hide();
	$('.lfail').hide();
	
	$('.Q1required').hide();
	$('.Q2required').hide();
	$('.Q3required').hide();
	$('.Q4required').hide();
	$('.Q5required').hide();
	$('.Q6required').hide();
	$('.Q7required').hide();
	$('.Q8required').hide();
	$('.Q9required').hide();
	$('.Q10required').hide();
	
	$('#q1ti').hide();
	$('#q2ti').hide();
	$('#q3ti').hide();
	$('#q4ti').hide();
	$('#q5ti').hide();
	$('#q6ti').hide();
	$('#q7ti').hide();
	$('#q8ti').hide();
	$('#q9ti').hide();
	$('#q10ti').hide();
	
	
	// expose input field for other option on questions
	$('input[type="radio"][name="question1"]').click(function(){
		var question1 = $('input[type="radio"][name="question1"]:checked').val();
		if(question1 == ' '){
	
			$('#q1ti').show();
		} else{
			$('#q1ti').hide();
		}
	});
	$('input[type="radio"][name="question2"]').click(function(){
		var question2 = $('input[type="radio"][name="question2"]:checked').val();
		if(question2 == ' '){
	
			$('#q2ti').show();
		} else{
			$('#q2ti').hide();
		}
	});
	$('input[type="radio"][name="question3"]').click(function(){
		var question3 = $('input[type="radio"][name="question3"]:checked').val();
		if(question3 == ' '){
	
			$('#q3ti').show();
		} else{
			$('#q3ti').hide();
		}
	});
	$('input[type="radio"][name="question4"]').click(function(){
		var question4 = $('input[type="radio"][name="question4"]:checked').val();
		if(question4 == ' '){
	
			$('#q4ti').show();
		} else{
			$('#q4ti').hide();
		}
	});
	$('input[type="radio"][name="question5"]').click(function(){
		var question5 = $('input[type="radio"][name="question5"]:checked').val();
		if(question5 == ' '){
	
			$('#q5ti').show();
		} else{
			$('#q5ti').hide();
		}
	});
	$('input[type="radio"][name="question6"]').click(function(){
		var question6 = $('input[type="radio"][name="question6"]:checked').val();
		if(question6 == ' '){
	
			$('#q6ti').show();
		} else{
			$('#q6ti').hide();
		}
	});
	$('input[type="radio"][name="question7"]').click(function(){
		var question7 = $('input[type="radio"][name="question7"]:checked').val();
		if(question7 == ' '){
	
			$('#q7ti').show();
		} else{
			$('#q7ti').hide();
		}
	});
	$('input[type="radio"][name="question8"]').click(function(){
		var question8 = $('input[type="radio"][name="question8"]:checked').val();
		if(question8 == ' '){
	
			$('#q8ti').show();
		} else{
			$('#q8ti').hide();
		}
	});
	$('input[type="radio"][name="question9"]').click(function(){
		var question9 = $('input[type="radio"][name="question9"]:checked').val();
		if(question9 == ' '){
	
			$('#q9ti').show();
		} else{
			$('#q9ti').hide();
		}
	});
	$('input[type="radio"][name="question10"]').click(function(){
		var question10 = $('input[type="radio"][name="question10"]:checked').val();
		if(question10 == ' '){
	
			$('#q10ti').show();
		} else{
			$('#q10ti').hide();
		}
	});
	
	
	// form submision events
	
	$('#landigForm').submit(function(event){
		event.preventDefault();
		
		var lname = $('input[name="Name"]').val();
		var ldbd = $('input[name="Date"]').val();
		var ldbm = $('input[name="Month"]').val();
		var ldby = $('input[name="Year"]').val();
		var lmail = $('input[name="Email"]').val();
		var lwap = $('input[name="Whatsapp"]').val();
		var lyt = $('input[name="YouTube"]').val();
		
		var lq1 = $('input[type="radio"][name="question1"]:checked').val();
		var lq2 = $('input[type="radio"][name="question2"]:checked').val();
		var lq3 = $('input[type="radio"][name="question3"]:checked').val();
		var lq4 = $('input[type="radio"][name="question4"]:checked').val();
		var lq5 = $('input[type="radio"][name="question5"]:checked').val();
		var lq6 = $('input[type="radio"][name="question6"]:checked').val();
		var lq7 = $('input[type="radio"][name="question7"]:checked').val();
		var lq8 = $('input[type="radio"][name="question8"]:checked').val();
		var lq9 = $('input[type="radio"][name="question9"]:checked').val();
		var lq10 = $('input[type="radio"][name="question10"]:checked').val();
		
		var ildbd = parseInt(ldbd);
		var ildbm = parseInt(ldbm);
		var ldbylength = ldby.length;
		

		var lnameError = true;
		var ldbError = true;
		var lmailError = true;
		var lwapError = true;
		var lytError = true;
		
		var q1Error = true;
		var q2Error = true;
		var q3Error = true;
		var q4Error = true;
		var q5Error = true;
		var q6Error = true;
		var q7Error = true;
		var q8Error = true;
		var q9Error = true;
		var q10Error = true;
		
		
		if(lname == ''){
			lnameError = true;
			$('.lnamerequired').show();
		} else{
			lnameError = false;
			$('.lnamerequired').hide();
		}
		
		if(ldbd == '' || ldbm == '' || ldby == ''){
			ldbError = true;
			$('.bdrequired').show();
		} else {
			$('.bdrequired').hide();
			if(ildbd>31 || ildbd<1 || ildbm>12 || ildbm<1 || ldbylength != 4){
				ldbError = true;
				$('.bdinvalid').show();
			} else{
				ldbError = false;
				$('.bdinvalid').hide();
			}
		}
		
		if(lmail == ''){
			$('.lmailrequired').show();
			 lmailError = true;
		}else{
			$('.lmailrequired').hide();
			
			if(validateEmail(lmail) == true){
				$('.lmailvalid').hide();
				lmailError = false;
			} else{
				$('.lmailvalid').show();
				lmailError = true;
			}
		}
		
		if(lwap == ''){
			lwapError = true;
			$('.lwarequired').show();
		} else{
			lwapError = false;
			$('.lwarequired').hide();
		}
		
		if(lyt == ''){
			lytError = true;
			$('.lytrequired').show();
		} else{
			$('.lytrequired').hide();
			if(validateYouTubeLink(lyt) == true){
			   		$('.lytvalid').hide();
					lytError = false;
			   } else {
				   $('.lytvalid').show();
					lytError = true;
			   }
		}
		
		
		if(lq1 == undefined){
			q1Error = true;
			$('.Q1required').show();
		}else{
			
			if(lq1 == ' '){
				var lq1ti = $('#q1ti').val();
				if(lq1ti == ''){
					q1Error = true;
					$('.Q1required').show();
				}else{
					q1Error = false;
					$('input[name="question1"]').val(lq1ti);
					$('.Q1required').hide();
				}	
			} else{
				q1Error = false;
				$('.Q1required').hide();
			}	
		}
		
		if(lq2 == undefined){
			q2Error = true;
			$('.Q2required').show();
		}else{
			
			if(lq2 == ' '){
				var lq2ti = $('#q2ti').val();
				if(lq2ti == ''){
					q2Error = true;
					$('.Q2required').show();
				}else{
					q2Error = false;
					$('input[name="question2"]').val(lq2ti);
					$('.Q2required').hide();
				}	
			} else{
				q2Error = false;
				$('.Q2required').hide();
			}	
		}
		
		if(lq3 == undefined){
			q3Error = true;
			$('.Q3required').show();
		}else{
			
			if(lq3 == ' '){
				var lq3ti = $('#q3ti').val();
				if(lq3ti == ''){
					q3Error = true;
					$('.Q3required').show();
				}else{
					q3Error = false;
					$('input[name="question3"]').val(lq3ti);
					$('.Q3required').hide();
				}	
			} else{
				q3Error = false;
				$('.Q3required').hide();
			}	
		}
		
		if(lq4 == undefined){
			q4Error = true;
			$('.Q4required').show();
		}else{
			
			if(lq4 == ' '){
				var lq4ti = $('#q4ti').val();
				if(lq4ti == ''){
					q4Error = true;
					$('.Q4required').show();
				}else{
					q4Error = false;
					$('input[name="question4"]').val(lq4ti);
					$('.Q4required').hide();
				}	
			} else{
				q4Error = false;
				$('.Q4required').hide();
			}	
		}
		
		if(lq5 == undefined){
			q5Error = true;
			$('.Q5required').show();
		}else{
			
			if(lq5 == ' '){
				var lq5ti = $('#q5ti').val();
				if(lq5ti == ''){
					q5Error = true;
					$('.Q5required').show();
				}else{
					q5Error = false;
					$('input[name="question5"]').val(lq5ti);
					$('.Q5required').hide();
				}	
			} else{
				q5Error = false;
				$('.Q5required').hide();
			}	
		}
		
		if(lq6 == undefined){
			q6Error = true;
			$('.Q6required').show();
		}else{
			
			if(lq6 == ' '){
				var lq6ti = $('#q6ti').val();
				if(lq6ti == ''){
					q6Error = true;
					$('.Q6required').show();
				}else{
					q6Error = false;
					$('input[name="question6"]').val(lq6ti);
					$('.Q6required').hide();
				}	
			} else{
				q6Error = false;
				$('.Q6required').hide();
			}	
		}
		
		if(lq7 == undefined){
			q7Error = true;
			$('.Q7required').show();
		}else{
			
			if(lq7 == ' '){
				var lq7ti = $('#q7ti').val();
				if(lq7ti == ''){
					q7Error = true;
					$('.Q7required').show();
				}else{
					q7Error = false;
					$('input[name="question7"]').val(lq7ti);
					$('.Q7required').hide();
				}	
			} else{
				q7Error = false;
				$('.Q7required').hide();
			}	
		}
		
		if(lq8 == undefined){
			q8Error = true;
			$('.Q8required').show();
		}else{
			
			if(lq8 == ' '){
				var lq8ti = $('#q8ti').val();
				if(lq8ti == ''){
					q8Error = true;
					$('.Q8required').show();
				}else{
					q8Error = false;
					$('input[name="question8"]').val(lq8ti);
					$('.Q8required').hide();
				}	
			} else{
				q8Error = false;
				$('.Q8required').hide();
			}	
		}

		
		if(lq9 == undefined){
			q9Error = true;
			$('.Q9required').show();
		}else{
			
			if(lq9 == ' '){
				var lq9ti = $('#q9ti').val();
				if(lq9ti == ''){
					q9Error = true;
					$('.Q9required').show();
				}else{
					q9Error = false;
					$('input[name="question9"]').val(lq9ti);
					$('.Q9required').hide();
				}	
			} else{
				q9Error = false;
				$('.Q9required').hide();
			}	
		}
		
		if(lq10 == undefined){
			q10Error = true;
			$('.Q10required').show();
		}else{
			
			if(lq10 == ' '){
				var lq10ti = $('#q10ti').val();
				if(lq10ti == ''){
					q10Error = true;
					$('.Q10required').show();
				}else{
					q10Error = false;
					$('input[name="question10"]').val(lq10ti);
					$('.Q10required').hide();
				}	
			} else{
				q10Error = false;
				$('.Q10required').hide();
			}	
		}
	
		
		
		
		
		if( lnameError == false && ldbError == false && lmailError == false && lwapError == false && lytError == false && q1Error == false && q2Error == false && q3Error == false && q4Error == false && q5Error == false && q6Error == false && q7Error == false && q8Error == false && q9Error == false && q10Error == false ){
			
			var lform = $('#landigForm');
			var lformdata = lform.serialize();
			var urll = 'https://script.google.com/macros/s/AKfycbxhtwcuhnyRnNPdtbqxTlZdEjbyJWFy81gD-_FpZs3y9MfRflut/exec';
			var urll0 = ' '; //for test
			
			$.ajax({
				type: "GET",
				url: urll,
				dataType: "json",
				data: lformdata
			}).done(function(){
				$('.lsuccess').show();
				
				 $('input[name="Name"]').val(' ');
				 $('input[name="Date"]').val(' ');
				 $('input[name="Month"]').val(' ');
				 $('input[name="Year"]').val(' ');
				 $('input[name="Email"]').val(' ');
				 $('input[name="Whatsapp"]').val(' ');
				 $('input[name="YouTube"]').val(' ');
				
			}).fail(function(){
				$('.lfail').show();
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
	
	function validateYouTubeLink(link){
		var ytindex = link.indexOf("youtube.com"); 
		if(ytindex > 0 ){
			return true;
		} else{
			return false;
		}
	}
});