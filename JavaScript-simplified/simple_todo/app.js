const formEl = document.getElementById('new-item-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputEl = document.getElementById('item-input');
    const listItem = inputEl.value;
    const divEl = document.getElementById('list');
    const liEl = document.createElement('li');
    liEl.textContent = listItem;  
    divEl.appendChild(liEl);
    inputEl.value = '';
});
