const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateCarousel() {
    const translateX = -currentIndex * items[0].clientWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);