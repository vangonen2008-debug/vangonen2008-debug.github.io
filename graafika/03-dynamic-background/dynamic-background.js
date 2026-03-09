const body = document.body;

document.addEventListener('mousemove', (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = e.clientX;
    const y = e.clientY;

    let gradient;

    if (x < width / 2 && y < height / 2) {
        // Top-left
        gradient = 'linear-gradient(45deg, #95a9ff, #aa84cf)';
    } else if (x >= width / 2 && y < height / 2) {
        // Top-right
        gradient = 'linear-gradient(45deg, #ff9a9e, #fecfef)';
    } else if (x < width / 2 && y >= height / 2) {
        // Bottom-left
        gradient = 'linear-gradient(45deg, #a8edea, #fed6e3)';
    } else {
        // Bottom-right
        gradient = 'linear-gradient(45deg, #ffecd2, #fcb69f)';
    }

    body.style.background = gradient;
});