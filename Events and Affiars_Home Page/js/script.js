// JavaScript Document
$(document).ready(function(){
	var windowSize = $(window).width();
	if(windowSize <= 768){
		$(window).scroll(function(){
		if ($(this).scrollTop() > 10) {
			$('.top-img').css('height', '50px');
            $('.navbar-fixed-top').css('background', 'rgba(255,255,255,1)');
        }else{
			$('.navbar-fixed-top').css('background', 'rgba(255,255,255,0.75)');
			$('.top-img').css('height', '60px');
		}
	});
	} else{
		$(window).scroll(function(){
		if ($(this).scrollTop() > 10) {
			$('.top-img').css('height', '60px');
            $('.navbar-fixed-top').css('background', 'rgba(255,255,255,1)');
        }else{
			$('.navbar-fixed-top').css('background', 'rgba(255,255,255,0.75)');
			$('.top-img').css('height', '80px');
		}
	});
	}
	
	
	
	
	
	$(window).stellar();
	$.stellar({
  		horizontalOffset: 40,
  		verticalOffset: 150
	});
	$('#fundraising-section').stellar({
	  positionProperty: 'transform'
	});
});