const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = inputEl.value.trim();
    const liEl = document.createElement('li');
    liEl.textContent = input;
    ulEl.appendChild(liEl);
    inputEl.value = "";
})