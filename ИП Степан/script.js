document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navUl = document.querySelector("nav ul");

  // Обработчик события клика на иконку меню
  menuIcon.addEventListener("click", function () {
    navUl.classList.toggle("active");
  });

  // Обработчик события изменения размера окна
  window.addEventListener("resize", function () {
    if (window.innerWidth > 600) {
      // Если ширина окна больше 600px, показываем меню
      navUl.classList.remove("active");
    }
  });
});

// Функция для плавного перемещения вверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Обработчик события прокрутки страницы
window.addEventListener("scroll", function () {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Показываем или скрываем кнопку в зависимости от прокрутки
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
