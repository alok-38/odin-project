const button = document.querySelector('button');
const inputEl = document.querySelector('input');

function calculateVAT() {
    const inputPrice = parseFloat(inputEl.value.trim()); // Make sure to convert input value to a number
    const rate = 20 / 100;
    const finalPrice = inputPrice * (1 + rate); // Correct VAT calculation (adding the VAT to the price)
    alert(finalPrice);
    inputEl.value = "";
}

button.addEventListener('click', calculateVAT); // Add event listener to the button
