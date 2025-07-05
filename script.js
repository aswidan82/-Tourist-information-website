// Hero slider logic
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

// Initialize slider
showSlide(currentSlide);

// Visitor counter logic - simulate a working counter with localStorage to keep count between visits

const visitorNumberEl = document.getElementById('visitorNumber');

function updateVisitorCount() {
    let count = localStorage.getItem('visitorCount');
    if (!count) {
        count = Math.floor(Math.random() * 500) + 100; // random initial number between 100 and 600
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('visitorCount', count);
    visitorNumberEl.textContent = count;
}

// Update visitor count on page load
updateVisitorCount();
