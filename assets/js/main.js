// headline newsのSwiperの設定
const swiper = new Swiper("#headline-news .swiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: true,
    navigation: {
      nextEl: "#headline-news .swiper-button-next",
      prevEl: "#headline-news .swiper-button-prev",
    },
  });
  const coverSwiper = new Swiper("#cover .swiper", {
    loop: true,
    effect: "slide",
    fadeEffect: {
      crossFade: true
    },
    autoplay: true,
    navigation: {
      nextEl: "#cover .swiper-button-next",
      prevEl: "#cover .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination", //必須
    },
  });