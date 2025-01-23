const swiper = new Swiper('.card-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // Autoplay
  autoplay: {
      delay: 3000, // Waktu jeda antara slide (dalam milidetik)
      disableOnInteraction: false, // Autoplay tetap berjalan meskipun ada interaksi pengguna
  },

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicsBullets: true,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
});
