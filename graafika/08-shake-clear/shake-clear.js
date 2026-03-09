let positions = [];
const shakeThreshold = 8; // number of direction changes to detect shake
const timeWindow = 500; // milliseconds

document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    positions.push({ x: e.clientX, time: now });

    // Keep only positions within the time window
    positions = positions.filter(p => now - p.time < timeWindow);

    if (positions.length >= 5) {
        let directionChanges = 0;
        let lastDirection = 0; // 1 for right, -1 for left

        for (let i = 1; i < positions.length; i++) {
            const dx = positions[i].x - positions[i - 1].x;
            const direction = dx > 0 ? 1 : -1;

            if (lastDirection !== 0 && direction !== lastDirection) {
                directionChanges++;
            }
            lastDirection = direction;
        }

        if (directionChanges >= shakeThreshold) {
            // Shake detected, make elements fall
            const elements = document.querySelectorAll('.shake-element');
            elements.forEach(el => el.classList.add('fall'));
            positions = []; // Reset to prevent multiple triggers
        }
    }
});