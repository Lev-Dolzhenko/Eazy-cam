let slides = document.querySelectorAll('.header__slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

// setInterval(function() {
//   changeSlide(1);
// }, 5000); // Переключение каждые 5 секунд
