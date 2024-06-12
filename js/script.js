const swiperMainBanner = new Swiper('.swiper.main-banner', {
	direction: 'horizontal',
	// loop: true,

	pagination: {
		el: '.main-banner-wrapper .swiper-pagination',
		dynamicBullets: true,
		dynamicMainBullets: 4,
		clickable: true,
	},

	navigation: {
		nextEl: '.main-banner-wrapper .swiper-button-next-custom',
		prevEl: '.main-banner-wrapper .swiper-button-prev-custom',
		// disabledClass: 'disabled',
		// navigationDisabledClass: 'disabled',
	},
	allowTouchMove: true,
	grabCursor: true,
	// allowSlideNext: false,
});

const swiperMainNav = new Swiper('.swiper.slider-nav', {
	direction: 'horizontal',
	loop: true,
	allowTouchMove: true,
	// grabCursor: true,
	// allowSlideNext: false,
	breakpointsBase: 'window',
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
		},
		576: {
			slidesPerView: 3,
			spaceBetween: 10,
			loop: true,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 10,
			loop: true,
		},
		992: {
			slidesPerView: 7,
			spaceBetween: 10,
			loop: true,
		},
		1100: {
			slidesPerView: 9,
			loop: false,
		},
	},
});
