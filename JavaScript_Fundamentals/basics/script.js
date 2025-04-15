console.log("JavaScript is connected!");

const h1El = document.querySelector('h1');

const button = document.querySelector('button');

const pEl = document.querySelector('p');

button.addEventListener('click', () => {
    h1El.textContent = "You changed me!";
    h1El.style.color = "#ffffff";
    // Change background color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    const nameInput = document.querySelector('input');
    const name = nameInput.value;
    pEl.textContent = `Hello ${name}`;
    pEl.style.color = "#ffffff";
    nameInput.value = "";
});

