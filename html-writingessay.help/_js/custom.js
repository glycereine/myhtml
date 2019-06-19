(function( $ ) {

	$(document).ready(function(){

	});

	var mainSlider = function() {
		$('.main-slider').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 500,
			fade: true,
			arrows: true,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 993,
					settings: {
						arrows: false
					}
				}
				
		    ]
		});

		$('.offer-slider').slick({
			dots: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 500,
			fade: true,
			arrows: true,
			adaptiveHeight: true,
			responsive: [	
				{
					breakpoint: 993,
					settings: {
						arrows: false
					}
				}
				
		    ]
		});

	};
	

	var scrollToBottom = function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	};

	var maps = function() {
		$('.maps').click(function () {
			$('.maps iframe').css("pointer-events", "auto");
		});
		$( ".maps" ).mouseleave(function() {
			$('.maps iframe').css("pointer-events", "none"); 
		});
	};

	var headerFixed = function() {
		if ( $( ".header-sticky" ).length ) {

			var headerFix = $('.header-sticky').offset().top;
			$(window).on('load scroll', function() {
				var y = $(this).scrollTop();

				if ( y >= 440 ) {
					$('.header-sticky').addClass('float-header');
				} else {
					$('.header-sticky').removeClass('float-header');
				}
			});

		}
	};

	var goTop = function() {
		$(window).scroll(function() {
			if ( $(this).scrollTop() > 100 ) {
				$('.go-top').addClass('show');
			} else {
				$('.go-top').removeClass('show');
			}
		});

		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: 0 }, 1000);
			return false;
		});
	};

	// Dom Ready
	$(function() {
		mainSlider();
		// scrollToBottom();
		// goTop();
		maps();
		headerFixed();
	});



})(jQuery);


function searchToggle(obj, evt){
	var container = $(obj).closest('.form-search');

	if(!container.hasClass('active')){
		container.addClass('active');
		evt.preventDefault();
	}
	else if(container.hasClass('active') && $(obj).closest('.btn-search').length == 0){
		container.removeClass('active');
	}
}