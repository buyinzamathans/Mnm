document.addEventListener("DOMContentLoaded", () => {
    // Select all cards to animate
    const cards = document.querySelectorAll(".card");

    // Create an intersection observer for a smooth reveal effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.1
    });

    // Apply the observer to each card with a slight delay based on order
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});
