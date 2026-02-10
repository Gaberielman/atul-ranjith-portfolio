// assets/js/animations.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Smooth Navigation Highlighting
    const navLinks = document.querySelectorAll('nav a');
    window.addEventListener('scroll', () => {
        let current = "";
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-blue-600');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('text-blue-600');
            }
        });
    });
});