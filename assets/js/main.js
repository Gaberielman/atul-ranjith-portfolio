// main.js - FULL REPLACEMENT
document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all instances of toggles and icons
    const themeToggles = document.querySelectorAll('#theme-toggle');
    const themeIcons = document.querySelectorAll('#theme-icon');
    const body = document.body;

    // 2. Load Saved Preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcons.forEach(icon => icon.textContent = '☀️');
    } else {
        body.classList.remove('light-mode');
        themeIcons.forEach(icon => icon.textContent = '🌙');
    }

    // 3. Toggle Logic for ALL buttons
    themeToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const isLight = body.classList.toggle('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            
            // Sync all icons across the page
            themeIcons.forEach(icon => {
                icon.textContent = isLight ? '☀️' : '🌙';
            });
        });
    });

    // 4. Parallax Effect
    document.addEventListener('mousemove', (e) => {
        const xPercent = (e.clientX / window.innerWidth) - 0.5;
        const yPercent = (e.clientY / window.innerHeight) - 0.5;
        const mesh = document.querySelector('.mesh-bg');
        if (mesh) {
            mesh.style.transform = `translate(${xPercent * 30}px, ${yPercent * 30}px)`;
        }
    });
});