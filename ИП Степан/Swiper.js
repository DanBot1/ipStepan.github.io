// Инициализация Swiper.js для карусели
var homeCarousel = new Swiper("#home-carousel", {
  effect: "blur", // Эффект размытия
  grabCursor: true,
  loop: true, // Зацикливание карусели
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 10000, // Интервал смены слайдов в миллисекундах (10 секунд)
  },
  blurEffect: {
    // Устанавливаем уровень размытия
    intensity: 0.7, // 30% размытия
  },
});
