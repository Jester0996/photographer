// Галерея

const swiper = new Swiper("#gallery", {
  loop: true,
  slidesPerView: 3, 
  spaceBetween: 20,

  navigation: {
    prevEl: "#gallery-prev",
    nextEl: "#gallery-next"

  }
})