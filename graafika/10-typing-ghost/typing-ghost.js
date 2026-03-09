const input = document.getElementById('text-input');
const ghost = document.getElementById('ghost-text');

input.addEventListener('input', (e) => {
    const text = e.target.value;
    ghost.innerHTML = ''; // clear

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.classList.add('letter');
            ghost.appendChild(span);
        }, i * 100); // 100ms delay per letter
    }
});