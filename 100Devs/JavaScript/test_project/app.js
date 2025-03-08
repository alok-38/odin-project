const buttonEl = document.querySelector('button');

const spanEl = document.querySelector('span');

let initialCount = 0;

spanEl.textContent = initialCount;

function increment() {
    spanEl.textContent = ++initialCount;
}

buttonEl.addEventListener('click', increment);