const slides = document.querySelectorAll('.slide');
const navigation = document.querySelector('.navigation');
let currentSlide = 0;
let slideInterval;

// Create navigation buttons
slides.forEach((_, index) => {
    const button = document.createElement('button');
    button.classList.add('nav-btn');
    if (index === 0) button.classList.add('active');
    button.addEventListener('click', () => goToSlide(index));
    navigation.appendChild(button);
});

function goToSlide(index) {
    // Remove active class from current slide and nav button
    slides[currentSlide].classList.remove('active');
    navigation.children[currentSlide].classList.remove('active');
    
    // Update current slide
    currentSlide = index;
    
    // Add active class to new slide and nav button
    slides[currentSlide].classList.add('active');
    navigation.children[currentSlide].classList.add('active');
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}

// Start automatic slideshow
function startSlideshow() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Pause slideshow when hovering over container
const container = document.querySelector('.slider-container');
container.addEventListener('mouseenter', () => clearInterval(slideInterval));
container.addEventListener('mouseleave', startSlideshow);

// Start the slideshow
startSlideshow();