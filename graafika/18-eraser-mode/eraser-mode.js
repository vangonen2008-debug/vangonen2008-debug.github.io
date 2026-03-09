const erasables = document.querySelectorAll('.erasable');

erasables.forEach(erase => {
    erase.addEventListener('mouseenter', () => {
        erase.classList.add('erased');
    });
});