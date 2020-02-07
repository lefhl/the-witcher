var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // количество слайдов, показанных за раз
    loop: true, // бесконечная прокрутка
    navigation: {
    nextEl: '.arrow' // класс "нашей" стрелки вместо дефолтной
  },
  breakpoints: {
    // when window width is >= 320px т.е. добавляем адаптивности)
    540: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  }
});

var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
  menu.classList.toggle('header-active');
  menuButton.classList.toggle('menu-button-active');
})
