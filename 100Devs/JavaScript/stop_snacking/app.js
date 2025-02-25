const inputEl = document.querySelector('#snackInput');
const submitBtn = document.querySelector('#submitBtn');
const modal = document.querySelector('#myModal');
const closeBtn = document.querySelector('.close');
const modalMessage = document.querySelector('#modalMessage');

// Function to handle the modal display
function stopSnacking() {
    const numberOfSnacks = parseInt(inputEl.value, 10);
    if (!isNaN(numberOfSnacks) && numberOfSnacks > 0) {
        modal.style.display = 'block';
        modalMessage.textContent = `Stop snacking! You already had ${numberOfSnacks} snacks!`;
        inputEl.value = "";
    } else {
        modal.style.display = 'block';
        modalMessage.textContent = 'Please enter a valid number.';
    }
}

// When the user clicks the button, show the modal
submitBtn.addEventListener('click', stopSnacking);

// When the user clicks on the close button, close the modal
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});