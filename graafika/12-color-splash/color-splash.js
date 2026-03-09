let splash = null;
let growInterval = null;

document.addEventListener('mousedown', (e) => {
    if (splash) splash.remove(); // Remove any existing splash

    splash = document.createElement('div');
    splash.classList.add('splash');
    splash.style.left = (e.clientX - 25) + 'px';
    splash.style.top = (e.clientY - 25) + 'px';
    splash.style.width = '50px';
    splash.style.height = '50px';
    splash.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
    document.body.appendChild(splash);

    let size = 50;
    growInterval = setInterval(() => {
        size += 10; // Grow by 10px every 50ms
        splash.style.width = size + 'px';
        splash.style.height = size + 'px';
        splash.style.left = (e.clientX - size / 2) + 'px';
        splash.style.top = (e.clientY - size / 2) + 'px';
    }, 50);
});

document.addEventListener('mouseup', () => {
    if (growInterval) {
        clearInterval(growInterval);
        growInterval = null;
    }
    if (splash) {
        splash.classList.add('fade');
        setTimeout(() => {
            if (splash) splash.remove();
        }, 500); // Fade out and remove after 500ms
    }
});