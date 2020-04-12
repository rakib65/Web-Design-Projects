// JavaScript Document
$(document).ready(function(){
	$('.posted').hide();
	$(function () {
  		$('.cform').parsley().on('field:validated', function() {
    		var ok = $('.parsley-error').length === 0;
    		$('.bs-callout-info').toggleClass('hidden', !ok);
    		$('.bs-callout-warning').toggleClass('hidden', ok);
  		})
	  .on('form:submit', function() {
		//return false; // Don't submit form for this demo
			/*-------------------------------------------------------*/
				var form = $('.cform'),
				url = 'https://script.google.com/macros/s/AKfycbytLTCTy1LYflo-H8C2zHgkRxTSkm6xEg4HDfNfxJvAdGeIKhtY/exec';

				//$('.cform').on('submit', function(e) {
				  //e.preventDefault();
				  var jqxhr = $.ajax({
					url: url,
					method: "GET",
					dataType: "json",
					data: form.serialize()
				  }).success(
					$('.posted').show()
				  );
				//});
	/*-----------------------------------------------------------*/
	  });
	});
	
});