const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = inputEl.value.trim();
    if (!input) return; // Prevent empty tasks

    const liEl = document.createElement('li');
    liEl.textContent = input;

    // Optional: remove task on click
    liEl.addEventListener('click', () => liEl.remove());

    ulEl.appendChild(liEl);
    inputEl.value = "";
});
