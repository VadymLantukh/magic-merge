document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
      el: '.swiper-pagination-main',
      clickable: true,
    },

    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

  });
});
