const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const spanEl = document.querySelector('span');
const h1El = document.querySelector('h1');
const h1Text = h1El.textContent;

const MAX_COUNT = 10;
const MIN_COUNT = 0;

let initialCount = 0;
spanEl.textContent = initialCount;

function increase() {
    if (initialCount < MAX_COUNT) {
        spanEl.textContent = ++initialCount;
        spanEl.style.color = 'rgb(7, 87, 7)';
        if (initialCount === MAX_COUNT) {
            h1El.textContent = "Max Limit reached";
            h1El.style.color = 'rgb(240, 12, 12)';
            spanEl.style.color = 'rgb(240, 12, 12)';
        }
    }
}
function decrease() {
    if (MIN_COUNT === 0) {
        spanEl.textContent = --initialCount;
        spanEl.style.color = 'rgb(240, 12, 12)';
        if (initialCount === -5) {
            h1El.textContent = "Lower limit reached";
            h1El.style.color = 'rgb(240, 12, 12)';
            decreaseBtn.ariaDisabled = true;
        }
    }
}

function reset() {
    initialCount = 0;
    spanEl.textContent = initialCount;
    spanEl.style.color = 'rgb(28, 27, 27)';
    h1El.style.color = 'rgb(28, 27, 27)';
    h1El.textContent = h1Text;
}

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);

