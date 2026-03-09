const draggables = document.querySelectorAll('.draggable');
let dragging = false;
let currentDrag = null;
let offsetX, offsetY;
let targetX, targetY;

draggables.forEach(drag => {
    drag.addEventListener('mousedown', (e) => {
        dragging = true;
        currentDrag = drag;
        offsetX = e.clientX - drag.offsetLeft;
        offsetY = e.clientY - drag.offsetTop;
        targetX = e.clientX - offsetX;
        targetY = e.clientY - offsetY;
        drag.style.position = 'absolute';
    });
});

document.addEventListener('mousemove', (e) => {
    if (dragging) {
        targetX = e.clientX - offsetX;
        targetY = e.clientY - offsetY;
    }
});

document.addEventListener('mouseup', () => {
    dragging = false;
    currentDrag = null;
});

function animate() {
    if (currentDrag) {
        const rect = currentDrag.getBoundingClientRect();
        const currentX = rect.left;
        const currentY = rect.top;
        const newX = currentX + (targetX - currentX) * 0.05; // Low lerp factor for heavy inertia
        const newY = currentY + (targetY - currentY) * 0.05;
        currentDrag.style.left = newX + 'px';
        currentDrag.style.top = newY + 'px';
    }
    requestAnimationFrame(animate);
}

animate();