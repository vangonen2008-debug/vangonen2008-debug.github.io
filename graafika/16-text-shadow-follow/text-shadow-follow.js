const headings = document.querySelectorAll('h1, h2');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    headings.forEach(h => {
        const rect = h.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance > 0) {
            const maxShadow = 20;
            const shadowX = -(deltaX / distance) * maxShadow; // Opposite direction
            const shadowY = -(deltaY / distance) * maxShadow;

            h.style.textShadow = `${shadowX}px ${shadowY}px 10px rgba(0, 0, 0, 0.5)`;
        }
    });
});