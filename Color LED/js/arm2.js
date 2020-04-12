$(document).ready(function () {


	// set default color to black 
	var defaultColor = '000000';
	var leftImgBackground = 'url(img/leftT.png), #' + defaultColor;
	var rightImgBackground = 'url(img/rightT.png), #' + defaultColor;

   //assign default valoe
   $('.img-left').css('background', leftImgBackground);
   $('.img-left').css('background-repeat', 'no-repeat');
   $('.img-left').css('background-size', 'contain');
   $('.img-left').css('background-position', 'center center');

   $('.img-right').css('background', rightImgBackground);
   $('.img-right').css('background-repeat', 'no-repeat');
   $('.img-right').css('background-size', 'contain');
   $('.img-right').css('background-position', 'center center');

	//chose color fron color picker & place it on left

	$('input[name=left]').on('change', function(){
		var leftColor = $('input[name=left]').val();
		leftImgBackground = 'url(img/leftT.png), #' + leftColor;

		$('.img-left').css('background', leftImgBackground);
   		$('.img-left').css('background-repeat', 'no-repeat');
   		$('.img-left').css('background-size', 'contain');
   		$('.img-left').css('background-position', 'center center');
	});
	

	//chose color fron color picker & place it on right

	$('input[name=right]').on('change', function(){
		var rightColor = $('input[name=right]').val();
		rightImgBackground = 'url(img/rightT.png), #' + rightColor;

		$('.img-right').css('background', rightImgBackground);
   		$('.img-right').css('background-repeat', 'no-repeat');
   		$('.img-right').css('background-size', 'contain');
   		$('.img-right').css('background-position', 'center center');
	});
	
	// change color for both side when "Prevew Change" button
	$('.arm-button').on('click', function(){
		//for left
		var leftColor = $('input[name=left]').val();
		leftImgBackground = 'url(img/leftT.png), #' + leftColor;

		$('.img-left').css('background', leftImgBackground);
   		$('.img-left').css('background-repeat', 'no-repeat');
   		$('.img-left').css('background-size', 'contain');
   		$('.img-left').css('background-position', 'center center');



		//for right
		var rightColor = $('input[name=right]').val();
		rightImgBackground = 'url(img/rightT.png), #' + rightColor;

		$('.img-right').css('background', rightImgBackground);
   		$('.img-right').css('background-repeat', 'no-repeat');
   		$('.img-right').css('background-size', 'contain');
   		$('.img-right').css('background-position', 'center center');
	});

}); // end of document()