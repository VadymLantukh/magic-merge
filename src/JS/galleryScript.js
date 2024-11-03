document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiperGallery', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 5,
    },
  });
});