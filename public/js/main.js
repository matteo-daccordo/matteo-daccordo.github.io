AOS.init({
	duration: 800,
	easing: 'slide'
});

$(function ($) {
	"use strict";
	$(window).stellar({
		responsive: false,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});

	// Scrollax
	$.Scrollax();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};

	loader();

	carousel();

	fullHeight();

	burgerMenu();

	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	pageProgress()

	setSections()
});

function setSections(){
	$.get("about.html", function(data){
			$("#aboutme").html(data)
	})
	$.get("experience.html", function(data){
			$("#experience").html(data)
	})
	$.get("education.html", function(data){
			$("#education").html(data)
	})
	$.get("skills.html", function(data){
			$("#skills").html(data)
	})
	$.get("nav.html", function(data){
			$("#navigation").replaceWith(data)
	})
	$.get("more.html", function(data){
			$("#more").html(data)
	})
	$.get("footer.html", function(data){
			$("#footer").html(data)
	})
}

function pageProgress() {
	$(window).scroll(function () {
		var wintop = $(window).scrollTop(), docheight = $('.page').height(), winheight = $(window).height();
		// console.log(wintop);
		var totalScroll = (wintop / (docheight - winheight)) * 100;
		// console.log("total scroll" + totalScroll);
		$(".KW_progressBar").css("width", totalScroll + "%");
	});
};

function contentWayPoint() {
	var i = 0;
	$('.ftco-animate').waypoint(function (direction) {
		if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
			
			$('.number').each(function () {
				let $this = $(this)
				$this.animateNumber({
					number: num = $this.data('number'),
					numberStep: $.animateNumber.numberStepFactories.separator(',')
				}, 3500);
			});

			i++;
			$(this.element).addClass('item-animate');
			setTimeout(function () {

				$('body .ftco-animate.item-animate').each(function (k) {
					var el = $(this);
					setTimeout(function () {
						var effect = el.data('animate-effect');
						if (effect === 'fadeIn') {
							el.addClass('fadeIn ftco-animated');
						} else if (effect === 'fadeInLeft') {
							el.addClass('fadeInLeft ftco-animated');
						} else if (effect === 'fadeInRight') {
							el.addClass('fadeInRight ftco-animated');
						} else {
							el.addClass('fadeInUp ftco-animated');
						}
						el.removeClass('item-animate');
					}, k * 50, 'easeInOutExpo');
				});
			}, 100);
		}
	}, { offset: '95%' });
};

function burgerMenu() {
	$('.js-colorlib-nav-toggle').on('click', function (event) {
		event.preventDefault();
		if ($('body').hasClass('menu-show')) {
			$('body').removeClass('menu-show');
			$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
		} else {
			$('body').addClass('menu-show');
			setTimeout(function () {
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
			}, 900);
		}
	})
};

function fullHeight() {
	$('.js-fullheight').css('height', $(window).height());
	$(window).resize(function () {
		$('.js-fullheight').css('height', $(window).height());
	});
};

function carousel() {
	$('.home-slider').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 0,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		nav: false,
		dots: false,
		autoplayHoverPause: false,
		items: 1,
		navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 1,
				nav: false
			},
			1000: {
				items: 1,
				nav: false
			}
		}
	});
};