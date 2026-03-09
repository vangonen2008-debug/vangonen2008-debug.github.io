const stickers = ['😀', '🚀', '⭐', '🌟', '🎉', '🔥', '💎', '🎈', '🦄', '🌈'];

document.addEventListener('click', (e) => {
    const sticker = document.createElement('div');
    sticker.classList.add('sticker');
    sticker.textContent = stickers[Math.floor(Math.random() * stickers.length)];
    sticker.style.left = (e.clientX - 24) + 'px'; // Center the sticker
    sticker.style.top = (e.clientY - 24) + 'px';
    sticker.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(sticker);
});