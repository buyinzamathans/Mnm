document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    // Scroll reveal effect using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach((card, index) => {
        // Stagger initial animations
        card.style.transitionDelay = `${index * 0.08}s`;
        observer.observe(card);
    });
});
