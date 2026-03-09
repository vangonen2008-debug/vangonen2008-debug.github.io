const img = document.querySelector('.filter-image');

img.addEventListener('mouseover', () => {
    img.classList.add('filtered');
});

img.addEventListener('mouseout', () => {
    img.classList.remove('filtered');
});