const rotatings = document.querySelectorAll('.rotating');

rotatings.forEach(rot => {
    const duration = 5 + Math.random() * 10; // Random duration between 5-15 seconds
    rot.style.animation = `rotate ${duration}s infinite linear`;
});