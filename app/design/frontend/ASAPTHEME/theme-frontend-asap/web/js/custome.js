$(function () {
    ww = document.body.clientWidth;
    if (ww > 993) {

    $('.srch_btn').click(function(e) {
        $('.srch_box').slideToggle();
    });
	}
});

$(document).ready(function(e) {
	$('.cart').click(function(e) {
        $('.list-box').toggle();
		e.stopPropagation();

    });

$(document).click(function(e){
	$('.list-box').hide();
	e.stopPropagation();
});

	jQuery(document).on('click', '.mega-dropdown', function(e) {
  e.stopPropagation()

})

});


(function ($) {
  $('.spinner .btn:first-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
  });
  $('.spinner .btn:last-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
  });
})(jQuery);

    // You can also use "$(window).load(function() {"
    $(function () {

      // Slideshow 1
      $("#slider1").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 1900,
        namespace: "centered-btns"
      });

	   // Slideshow 2
      $("#slider2").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 800,
        maxwidth: 1003,
        namespace: "transparent-btns"
      });


    });
    $(document).ready(function() {
      $("#owl-demo").owlCarousel({
        navigation:true,
        afterInit : function(elem){
          var that = this
          that.owlControls.prependTo(elem)
        }
      });

    });
    $(document).ready(function(){

        $('#gallery').simplegallery({
            galltime : 400,
            gallcontent: '.content',
            gallthumbnail: '.thumbnail',
            gallthumb: '.thumb'
        });
		$('#gallery1').simplegallery({
            galltime : 400,
            gallcontent: '.content',
            gallthumbnail: '.thumbnail',
            gallthumb: '.thumb'
        });
		$('#gallery2').simplegallery({
            galltime : 400,
            gallcontent: '.content',
            gallthumbnail: '.thumbnail',
            gallthumb: '.thumb'
        });
		$('#gallery3').simplegallery({
            galltime : 400,
            gallcontent: '.content',
            gallthumbnail: '.thumbnail',
            gallthumb: '.thumb'
        });
		$('#gallery4').simplegallery({
            galltime : 400,
            gallcontent: '.content',
            gallthumbnail: '.thumbnail',
            gallthumb: '.thumb'
        });

    });
    $(document).ready(function() {
      $("#owl-demo2").owlCarousel({

      navigation : true,
      slideSpeed : 800,
      paginationSpeed : 400,
      singleItem : true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

      });
    });
$(function(){
	$('#link-wrapper').vTicker({
		speed: 700,
		pause: 6000,
		animation: 'fade',
		mousePause: false,
		showItems: 1,
		autoplay:'true'
	});
});
$(document).ready(function(e) {
    $(".pro_listing .close_btn").click(function(event){
  	$(this).parent().hide();
  	event.preventDefault();
});
});

$(function () {
    ww = document.body.clientWidth;
    if (ww < 1030) {
        $('#navbarCollapse a').click(function () {

            if ($(this).closest("li").children("ul").length) {
                if ($(this).parent("li").hasClass('expnd')) {
                    window.location = this.href;
                }

                $('#navbarCollapse a').removeClass('disabled');
                $(this).parent("li").addClass("expnd");
				$('#navbarCollapse a').not(this).parent("li").removeClass("expnd");
            }
        });
    }
})


$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();

	// fade in #back-top
	$(function () {
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
	});

});

