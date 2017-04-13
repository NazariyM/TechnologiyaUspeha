'use strict';

$(function () {

	// init full page
	$(function () {
		var $fullPage = $('.js-home-full');

		if ($fullPage.length) {
			$fullPage.fullpage({
				scrollingSpeed: 1000,
				dragAndMove: true,
				scrollOverflow: true,
				navigation: true,
				navigationPosition: 'right',
				verticalCentered: true
			});

			// $.fn.fullpage.fitToSection();

			if ($(window).width() <= 767) {
				$.fn.fullpage.destroy('all');
			}
		}
	});

	// init sliders
	$('.js-screen-slider').slick({
		draggable: false,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		cssEase: 'ease-in-out',
		useTransform: true,
		prevArrow: '<button type="button" class="screen__arrow screen__arrow-prev"><svg class="arrow-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld"></use></svg></button>',
		nextArrow: '<button type="button" class="screen__arrow screen__arrow-next"><svg class="arrow-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld"></use></svg></button>',
		responsive: [{
			breakpoint: 767,
			settings: {
				swipe: false
			}
		}]
	});

	$('.js-feed-slider').slick({
		speed: 600,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		cssEase: 'ease-in-out',
		useTransform: true,
		prevArrow: '<button type="button" class="screen__arrow screen__arrow-prev"><svg class="arrow-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld"></use></svg></button>',
		nextArrow: '<button type="button" class="screen__arrow screen__arrow-next"><svg class="arrow-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld"></use></svg></button>',
		responsive: [{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 475,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$('.js-clients-slider').slick({
		speed: 400,
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'ease-in-out',
		useTransform: true,
		prevArrow: '<button type="button" class="screen__arrow screen__arrow-prev"><svg class="arrow-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld"></use></svg></button>',
		nextArrow: '<button type="button" class="screen__arrow screen__arrow-next"><svg class="arrow-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld"></use></svg></button>',
		responsive: [{
			breakpoint: 1023,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 374,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$('.js-special-slider').slick({
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'ease-in-out',
		useTransform: true,
		prevArrow: '<button type="button" class="screen__arrow screen__arrow-prev"><svg class="arrow-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld"></use></svg></button>',
		nextArrow: '<button type="button" class="screen__arrow screen__arrow-next"><svg class="arrow-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr-sld"></use></svg></button>',
		responsive: [{
			breakpoint: 767,
			settings: {
				swipe: false
			}
		}]
	});

	// init fancybox

	(function () {
		var $imgPreview = $('.js-img-preview').find('.feed__item');

		$imgPreview.fancybox({
			image: {
				protect: true,
				slideShow: false,
				fullScreen: false,
				thumbs: true
			}
		});
	})();

	// home map
	(function () {
		var myMap, myPlacemark;
		ymaps.ready(init);

		function init() {
			myMap = new ymaps.Map('js-home-map', {
				center: [53.188496298829286, 50.15371174915307],
				zoom: 14
			}), myPlacemark = new ymaps.Placemark([53.19480611857074, 50.1113521604379], {
				hintContent: 'Технологии Успеха',
				iconContent: 'Ленинская улица 168'
			}, {
				iconLayout: 'default#imageWithContent',
				iconImageHref: 'img/logo.svg',
				iconImageSize: [43, 28],
				iconImageOffset: [-5, -38]
			});

			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom');
			myMap.controls.remove('searchControl');
			myMap.controls.remove('trafficControl');
			myMap.controls.remove('typeSelector');
			myMap.controls.remove('fullscreenControl');

			// var geolocationControl = new ymaps.control.GeolocationControl({
			// 	options: {
			// 		layout: 'round#buttonLayout'
			// 	}
			// });
			// myMap.controls.add(geolocationControl);
		}
	})();

	// toggle nav
	(function () {
		var nav = $('.js-nav'),
		    body = $('body'),
		    menuBtn = $('.js-hamburger');

		menuBtn.on('click', function (e) {
			body.toggleClass('is-locked');
			$(this).toggleClass('is-active');
			nav.toggleClass('is-active');
		});

		$(window).resize(function () {

			body.removeClass('is-locked');
			menuBtn.removeClass('is-active');
			nav.removeClass('is-active');
		});
	})();
});