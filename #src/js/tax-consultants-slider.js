const swiperMainPartner = new Swiper('.swiper.slider-tax-consultants', {
     direction: 'horizontal',
     loop: true,
     allowTouchMove: true,
     centeredSlides: true,
     autoplay: {
          delay: 4000,
          pauseOnMouseEnter: true,
     },
     breakpoints: {
          320: {
               slidesPerView: 1,
               spaceBetween: 24,
          },
          576: {
               slidesPerView: 2,
               spaceBetween: 24,
          },
          768: {
               slidesPerView: 2,
               spaceBetween: 24,
          },
          992: {
               slidesPerView: 3,
               spaceBetween: 24,
          },
          1200: {
               slidesPerView: 3,
               spaceBetween: 24,
          },
     },
     navigation: {
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
     },
});
