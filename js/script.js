const swiper = new Swiper('.swiper.main-banner', {
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
