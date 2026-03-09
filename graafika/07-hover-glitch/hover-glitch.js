const images = document.querySelectorAll('.glitch-image');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.classList.add('glitch');
    });
    img.addEventListener('mouseout', () => {
        img.classList.remove('glitch');
    });
});