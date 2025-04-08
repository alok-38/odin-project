const colors = [
    "#F4A300",
    "#1A8B93",
    "#9D34F5",
    "#E82B92",
    "#00A1D6",
    "#DCD3A1",
    "#3C7A4C",
    "#FF7F50",
    "#D946FE",
    "#3D2A80"
];

const buttonEl = document.querySelector('button');

function generateColors() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
}

buttonEl.addEventListener('click', generateColors);