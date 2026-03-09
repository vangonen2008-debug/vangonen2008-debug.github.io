const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playRandomSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Random frequencies for different sounds
    const frequencies = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]; // C major scale notes
    const freq = frequencies[Math.floor(Math.random() * frequencies.length)];

    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

document.addEventListener('keydown', (e) => {
    // Play sound for regular key presses (not special keys like Shift, Ctrl)
    if (e.key.length === 1) {
        playRandomSound();
    }
});