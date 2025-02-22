const buttonEl = document.querySelector('button');
const inputEl = document.querySelectorAll('input');
const modalEl = document.querySelector('.modal');

// Add event listener for the button click
buttonEl.addEventListener('click', (event) => {
    // Prevent form submission (page reload)
    event.preventDefault();
    // Get values from the inputs
    const firstName = inputEl[0].value;
    const firstMiddleName = inputEl[1].value;
    const lastMiddleName = inputEl[2].value;
    const lastName = inputEl[3].value;
    // Create the yelling message
    const yelledMessage = `YOU DONE MESSED UP, ${firstName.toUpperCase()} ${firstMiddleName.toUpperCase()} ${lastMiddleName.toUpperCase()} ${lastName.toUpperCase()}!!!`;
    // Display the message in the modal
    modalEl.textContent = yelledMessage;
    modalEl.style.display = 'block'; 
    inputEl.values = "";
})