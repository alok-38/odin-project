

// Predefined colors
const colors = [
    "#F4A300", "#1A8B93", "#9D34F5", "#E82B92", "#00A1D6",
    "#DCD3A1", "#3C7A4C", "#FF7F50", "#D946FE", "#3D2A80"
];

const colorPicker = document.getElementById('colorPicker');
const buttonEl = document.querySelector('button');
const paraEl = document.createElement('p');

// Add the paragraph to the document body initially so it's always available
document.body.appendChild(paraEl);

// Styling the paragraph once
paraEl.style.color = "#ffffff";
paraEl.style.fontSize = "2.5rem";
paraEl.style.fontWeight = "700";

// Event listener for the color picker
colorPicker.addEventListener('input', (event) => {
    const pickedColor = event.target.value;
    document.body.style.backgroundColor = pickedColor;
    paraEl.textContent = `Color: ${pickedColor}`;
});

// Function to generate a random color from the predefined list
function generateColors() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    paraEl.textContent = `Color: ${randomColor}`;
}

// Event listener for the button
buttonEl.addEventListener('click', generateColors);