document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiperGallery', {
    slidesPerView: 1,
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
    breakpoints: {
      1200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
});
