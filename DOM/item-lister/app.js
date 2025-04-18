const svgEl = document.querySelector('svg');
const headerInputEl = document.querySelector('header input');
const mainInputEl = document.querySelector('main input');
const buttonEl = document.querySelector('button');
const ulEl = document.querySelector('ul');

function addItem() {
    const inputItem = mainInputEl.value.trim();
    if (inputItem === "") return; // prevent adding empty items
    const liEl = document.createElement('li');
    liEl.textContent = inputItem;
    ulEl.appendChild(liEl); 
    mainInputEl.value = ""; // clear input
}

buttonEl.addEventListener('click', addItem);