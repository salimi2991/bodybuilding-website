let toggleBtn = document.querySelector('.toggle-btn'),
    menu = document.querySelector('#menuBar'),
    closeBtn = document.querySelector('.close-btn'),
    menuOverlay = document.querySelector('.menu-overlay'),
    percentage = document.querySelectorAll('.skillbar-track'),
    topBtn = document.querySelector('#top');

toggleBtn.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
});

window.addEventListener('load', () => {
    percentage.forEach((perc) => {
        perc.style.width = `${perc.dataset.value}%`;
    });
});

window.addEventListener('scroll', () => {
    this.scrollY >= 500 ? topBtn.classList.add('show') : topBtn.classList.remove('show');
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});