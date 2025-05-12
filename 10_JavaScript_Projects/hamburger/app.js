const buttonEl = document.querySelector('button');
const navEl = document.querySelector('nav');
const overlayEl = document.querySelector('.overlay');

const showNav = () => {
    navEl.classList.toggle('active');
    overlayEl.classList.toggle('active');
};

buttonEl.addEventListener('click', showNav);
overlayEl.addEventListener('click', showNav);
