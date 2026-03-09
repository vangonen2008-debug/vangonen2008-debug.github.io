const elements = document.querySelectorAll('.scroll-element');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scaleBase = 1 + scrollY / 500; // base scale

    elements.forEach((elem, index) => {
        const individualScale = scaleBase + index * 0.1; // each element scales differently
        elem.style.transform = `scale(${individualScale})`;
    });
});