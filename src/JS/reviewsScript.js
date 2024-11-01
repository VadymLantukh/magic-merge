document.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },


    speed: 500,


  });
});
