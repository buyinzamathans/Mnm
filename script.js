document.addEventListener("DOMContentLoaded", () => {
    // Fade in animation for cards
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Hide slider buttons if a product only has 1 image
    document.querySelectorAll('.card-slider').forEach(slider => {
        const slidesContainer = slider.querySelector('.slides');
        if (slidesContainer.children.length <= 1) {
            slider.querySelectorAll('.slider-btn').forEach(btn => {
                btn.style.display = 'none';
            });
        }
    });
});

// Function to move slides
function moveSlide(button, direction) {
    const slider = button.parentElement;
    const slidesContainer = slider.querySelector('.slides');
    const totalSlides = slidesContainer.children.length;
    
    // Get current index from data attribute
    let currentIndex = parseInt(slidesContainer.getAttribute('data-index')) || 0;
    
    // Update index based on direction (-1 or 1)
    currentIndex += direction;
    
    // Loop around if out of bounds
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    
    // Save new index and apply CSS transform
    slidesContainer.setAttribute('data-index', currentIndex);
    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}
