const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-sug',
  },
  thumbs: {
    swiper: {
      el: '.image-mini-slider',
      slidesPerView: '3'
    },
  }

});
const swiperThunbs = new Swiper('.image-mini-slider', {
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    340: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2.2,
    },
    640: {
      slidesPerView: 2.4,
    },
    866: {
      slidesPerView: 3,
    },
    spaceBetween: 20,
  }
})
const swiperAdvantage = new Swiper('.swiper-advantages', {
  pagination: {
    el: '.swiper-pagination-advantage',
    clickable: true
  },
  slidesPerView: 3
});

const swiperSuggestions = new Swiper('.swiper-suggestions', {
  breakpoints: {
    240: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    560: {
      slidesPerView: 2.2,
    },
    680: {
      slidesPerView: 2.5,
    },
    748: {
      slidesPerView: 3.1,
      spaceBetween: 36,
    },
    980: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }
});