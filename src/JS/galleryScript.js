// const { HashNavigation } = require("swiper/modules");

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiperGallery', {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    history: {
      key: "slide",
    },
    speed: 500,

  });
});
