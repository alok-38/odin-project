// Select all input elements in the controls section
const inputs = document.querySelectorAll('.controls input');

// Function to handle changes and update CSS variables
function styleImage() {
    // Get values from the inputs
    const spacing = document.querySelector('input[name="spacing"]').value;
    const blur = document.querySelector('input[name="blur"]').value;
    const baseColor = document.querySelector('input[name="base"]').value;

    // Update CSS variables
    document.documentElement.style.setProperty('--spacing', `${spacing}px`);
    document.documentElement.style.setProperty('--blur', `${blur}px`);
    document.documentElement.style.setProperty('--base', baseColor);
}

// Add event listeners to each input element (only once)
inputs.forEach(input => input.addEventListener('input', styleImage));

// Initial style application when the page loads
styleImage();
