const inputEl = document.querySelector('input');
const fahrenheitEl = document.querySelector('.fahrenheit');
const kelvinEl = document.querySelector('.kelvin');

function temperatureConverter() {
    const temperature = parseFloat(inputEl.value);

    // Check if the input is a valid number
    if (!isNaN(temperature)) {
        // Convert to Fahrenheit and Kelvin
        const fahrenheit = (temperature * 9 / 5) + 32;
        const kelvin = temperature + 273.15;

        // Display the results inside the temp boxes
        fahrenheitEl.innerHTML = `<div class="value">${fahrenheit.toFixed(2)}</div>`;
        kelvinEl.innerHTML = `<div class="value">${kelvin.toFixed(2)}</div>`;
    } else {
        // If input is invalid, reset the output
        fahrenheitEl.innerHTML = `<div class="value">Invalid Input</div>`;
        kelvinEl.innerHTML = `<div class="value">Invalid Input</div>`;
    }
}

// Add an event listener to trigger the conversion when the user types
inputEl.addEventListener('input', temperatureConverter);
