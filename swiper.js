const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.3,
  spaceBetween: 12,
  //   freeMode: true,
  breakpoints: {
    576: {
      slidesPerView: 1.7,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const swiperTwo = new Swiper(".mySwiperTwo", {
  slidesPerView: 1.3,
  spaceBetween: 16,
  //   freeMode: true,
  breakpoints: {
    768: {
      slidesPerView: 2.6,
      spaceBetween: 24,
    },
  },
});
