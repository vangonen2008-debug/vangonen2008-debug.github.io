const buttons = document.querySelectorAll('.magnetic-button');
const threshold = 100; // distance in pixels to start attraction
const strength = 0.1; // how strong the attraction is

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;

        const deltaX = mouseX - buttonX;
        const deltaY = mouseY - buttonY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < threshold) {
            const moveX = deltaX * strength;
            const moveY = deltaY * strength;

            button.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            button.style.transform = 'translate(0px, 0px)';
        }
    });
});