document.addEventListener('DOMContentLoaded', () => {
    const okno = document.getElementById('popup');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');

    openBtn.addEventListener('click', () => {
        okno.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        okno.classList.add('hidden');
    });
});