document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    // Основні налаштування
    slidesPerView: 1,
    spaceBetween: 30,

    // Налаштування пагінації
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Додаємо плавність переходів
    speed: 500,

    // Автопрокрутка
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
  });
});
