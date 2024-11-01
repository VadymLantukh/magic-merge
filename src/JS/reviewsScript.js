document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    // Основні налаштування
    slidesPerView: 1,
    spaceBetween: 30,

    // Налаштування пагінації
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <div class="${className} custom-bullet">
            <div class="bullet-inner"></div>
          </div>
        `;
      },
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
