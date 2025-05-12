const spanEl = document.getElementById('counter');
let initialCount = 0;
spanEl.textContent = initialCount;

const increment = () => {
    let newCount = ++initialCount;
    spanEl.textContent = newCount;
};

const buttonEl = document.getElementById('increment');
buttonEl.addEventListener('click', increment);

// Keyboard support: Press Spacebar or ArrowUp to increment
document.addEventListener('keydown', (event) => {
    const tag = document.activeElement.tagName.toLowerCase();
    if ((event.code === 'Space' || event.code === 'ArrowUp') && tag !== 'button' && tag !== 'input') {
        increment();
    }
});

const reset = () => {
    initialCount = 0;
    spanEl.textContent = initialCount;
};

const resetButtonEl = document.getElementById('reset');
resetButtonEl.addEventListener('click', reset);
