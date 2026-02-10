// main.js - Performance Optimized
document.addEventListener('DOMContentLoaded', () => {
    
    // Fast Intersection Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.05 }); // Lower threshold = triggers sooner

    document.querySelectorAll('.reveal, .glass-panel').forEach(el => {
        revealObserver.observe(el);
    });

    // Optimized Mouse Tracking using RequestAnimationFrame
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateParallax() {
        // Smooth interpolation (lerp) for that "Liquid" feel
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        const xPercent = (currentX / window.innerWidth) - 0.5;
        const yPercent = (currentY / window.innerHeight) - 0.5;

        // Background movement
        const mesh = document.querySelector('.mesh-bg');
        if (mesh) {
            mesh.style.transform = `translate(${xPercent * 30}px, ${yPercent * 30}px)`;
        }

        // Title tilt - making it responsive but tight
        const title = document.querySelector('.futuristic-title');
        if (title) {
            title.style.transform = `perspective(1000px) rotateY(${xPercent * 15}deg) rotateX(${-yPercent * 15}deg)`;
        }

        requestAnimationFrame(updateParallax);
    }

    updateParallax();
});

// Add this check inside your updateParallax function in main.js
const isMobile = window.innerWidth < 768;
const intensity = isMobile ? 10 : 30; // Much softer on mobile

if (mesh) {
    mesh.style.transform = `translate(${xPercent * intensity}px, ${yPercent * intensity}px)`;
}