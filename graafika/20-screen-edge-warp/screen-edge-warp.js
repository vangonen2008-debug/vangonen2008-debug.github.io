const obj = document.querySelector('.warp-object');
let isDragging = false;
let offsetX, offsetY;

obj.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - obj.offsetLeft;
    offsetY = e.clientY - obj.offsetTop;
    obj.style.position = 'absolute';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Warp to opposite side when crossing edges
        if (x < -obj.offsetWidth) x = width;
        if (x > width) x = -obj.offsetWidth;
        if (y < -obj.offsetHeight) y = height;
        if (y > height) y = -obj.offsetHeight;

        obj.style.left = x + 'px';
        obj.style.top = y + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});