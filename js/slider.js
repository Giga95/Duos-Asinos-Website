const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let currentSlide = 0;
let autoSlide;

function showSlide(n) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  slides[currentSlide].style.display = 'flex';
  dots[currentSlide].classList.add('active');
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
  });
});

autoSlide = setInterval(nextSlide, 5000);
showSlide(currentSlide);


function showSlide(n) {
    slides[currentSlide].classList.add('slide-out');
  
    setTimeout(() => {
      slides.forEach(slide => {
        slide.style.display = 'none';
        slide.classList.remove('slide-out');
      });
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
  
      slides[n].style.display = 'flex';
      dots[n].classList.add('active');
      slides[n].classList.add('slide-in');
  
      setTimeout(() => {
        slides[n].classList.remove('slide-in');
      }, 100);
    }, 100);
  }
  