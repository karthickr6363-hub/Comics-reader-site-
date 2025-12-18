// Home Page Slider Functionality

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
    }
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Auto-play slider
let slideInterval;

function startSlider() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Initialize slider
document.addEventListener('DOMContentLoaded', function() {
    showSlide(0);
    startSlider();
    
    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopSlider);
        heroSection.addEventListener('mouseleave', startSlider);
    }
});

