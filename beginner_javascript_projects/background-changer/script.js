const bodyEl = document.querySelector('body');
const colorDisplay = document.getElementById('colorDisplay');
const changeColorBtn = document.getElementById('changeColorBtn');
const addColorBtn = document.getElementById('addColorBtn');
const customColorInput = document.getElementById('customColorInput');
const copyColorBtn = document.getElementById('copyColorBtn');

let colors = ["red", "blue", "green", "pink", "white", "purple", "grey", "orange", "yellow"];

const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    bodyEl.style.backgroundColor = randomColor;
    colorDisplay.textContent = `Current color: ${randomColor}`;
    colorDisplay.style.color = randomColor.toLowerCase() === "white" ? "black" : randomColor;
};

const addColor = () => {
    const newColor = customColorInput.value.trim();
    if (newColor) {
        // Add to the colors list
        colors.push(newColor);

        // Add the color to the displayed list of added colors
        const colorItem = document.createElement('li');
        colorItem.textContent = newColor;
        colorItem.style.backgroundColor = newColor;
        colorItem.style.color = newColor.toLowerCase() === "white" ? "black" : "white"; // Ensure text is readable
        colorListItems.appendChild(colorItem);

        customColorInput.value = ''; // Clear input field
    }
};

const copyColor = () => {
    const colorText = colorDisplay.textContent.replace("Current color: ", "");
    navigator.clipboard.writeText(colorText)
        .then(() => alert(`Copied "${colorText}" to clipboard!`))
        .catch(err => alert('Failed to copy color: ', err));
};

changeColorBtn.addEventListener('click', changeColor);
addColorBtn.addEventListener('click', addColor);
copyColorBtn.addEventListener('click', copyColor);

// Initial color
changeColor();