document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
      el: '.swiper-pagination-main',
      clickable: true,
    },

  });
});
