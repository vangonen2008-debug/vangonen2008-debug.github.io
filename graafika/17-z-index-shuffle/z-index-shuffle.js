let zIndexCounter = 10;

const layers = document.querySelectorAll('.layer');

layers.forEach(layer => {
    layer.addEventListener('click', () => {
        layer.style.zIndex = zIndexCounter++;
    });
});