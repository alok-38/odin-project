const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');

function check() {
    const day = inputEl.value.toLowerCase().trim(); // Getting the day and standardizing the input
    let message = '';

    // Conditionals to check the day
    switch (day) {
        case 'monday':
            message = 'Start of the week!';
            inputEl.value = "";
            break;
        case 'tuesday':
            message = 'Keep going!';
            break;
        case 'wednesday':
            message = 'Halfway through!';
            inputEl.value = "";
            break;
        case 'thursday':
            message = 'Almost there!';
            inputEl.value = "";
            break;
        case 'friday':
            message = 'It\'s finally Friday!';
            inputEl.value = "";
            break;
        case 'saturday':
            message = 'Weekend vibes!';
            inputEl.value = "";
            break;
        case 'sunday':
            message = 'Relax and recharge!';
            inputEl.value = "";
            break;
        default:
            message = 'Please enter a valid day of the week!';
            inputEl.value = "";
            break;
    }

    alert(message); // Show a message based on the input
}

buttonEl.addEventListener('click', check);
