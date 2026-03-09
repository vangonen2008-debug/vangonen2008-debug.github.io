const cursor = document.getElementById('custom-cursor');
let angle = 0;

document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.clientX - 15) + 'px'; // Center the cursor
    cursor.style.top = (e.clientY - 15) + 'px';
    angle += 5; // Rotate by 5 degrees on each move
    cursor.style.transform = `rotate(${angle}deg)`;
});