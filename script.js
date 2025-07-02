let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active')
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // 停止輪播（滑鼠移入）
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    768: { slidesPerView: 2 }, // 可合併至 640
    1024: { slidesPerView: 3 },
  }
});

//Scroll Reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 2000,
  reset: true,
});

sr.reveal('.home-slider, .about-img, .about-text, .box, .s-box, .connect-text, .contact-box, .order-form', {
  interval: 200
});
