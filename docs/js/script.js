window.addEventListener('DOMContentLoaded', () => {
  const callOrder = document.querySelectorAll('.call-order');
  const overlay = document.querySelector('.overlay');
  const closeButton = document.querySelector('.close-button');
  const menuButton = document.querySelector('.menu-button');
  const catalogButtonImage = document.querySelector(
    '#catalog-button__image_hide'
  );
  const menuButtonImage = document.querySelector('.menu-button__image-close');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Мобильное меню
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu_visible');
  });
  // Конец Мобильное меню

  // Смена кнопки при клике мобильное меню
  menuButton.addEventListener('click', () => {
    catalogButtonImage.classList.toggle('catalog-button__image_hide');

    menuButtonImage.classList.toggle('menu-button__image-close_visible');
    menuButton.classList.toggle('menu-button_close');
  });
  // Конец Смена кнопки при клике мобильное меню

  // Модальное окно
  callOrder.forEach((callOrderElement) => {
    callOrderElement.addEventListener('click', () => {
      overlay.classList.add('overlay_visible');
      document.body.classList.add('body_overflow-hidden');
    });
  });

  closeButton.addEventListener('click', () => {
    overlay.classList.remove('overlay_visible');
    document.body.classList.remove('body_overflow-hidden');
  });
  // Конец Модальное окно

  // Swiper 1
  const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });

  // Swiper 2
  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    // wrapperClass: 'product__cards',
    // slideClass: 'product-card',
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      326: {
        slidesPerView: 1,
      },
    },
  });
});
