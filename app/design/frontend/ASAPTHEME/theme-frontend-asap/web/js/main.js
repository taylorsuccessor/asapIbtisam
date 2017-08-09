define([
  "jquery",
  'slick',
  'reveal',
  'video',
  'simplegallery',
], 
function($) {
  "use strict";

  // Here your custom code...
  $("#back-top").hide();
   $('.srch_btn').click(function(e) {
        $('.srch_box').slideToggle();
    });
  // Slideshow 1
      $("#slider1").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 1900,
        namespace: "centered-btns"
      });
	  
	  // fade in #back-top
	  
		$(window).scroll(function () {
			if ($(this).scrollTop() > 180) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
		$('#link-wrapper').vTicker({
		speed: 700,
		pause: 6000,
		animation: 'fade',
		mousePause: false,
		showItems: 1,
		autoplay:'true'
	});
	
	
  
   
    
  return;
});

	

	
