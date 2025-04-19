const buttonEl = document.querySelector('button');
const inputEls = document.querySelectorAll('input');
const warningEl = document.querySelector('.warning');

function displayWarning(event) {
    event.preventDefault();
    let emptyFound = false;

    inputEls.forEach(input => {
        if (input.value.trim() === '') {
            emptyFound = true;
        }
    });

    if (emptyFound) {
        warningEl.textContent = 'Please fill out all fields.';
        warningEl.style.background = "#f04124";
        warningEl.style.color = '#ffffff';
        warningEl.style.padding = '10px';
        warningEl.style.marginTop = '10px';
        warningEl.style.borderRadius = '4px';
        warningEl.style.display = "block";
        setTimeout(() => {
            warningEl.style.display = "none";
        }, 1000);
    } else {
        warningEl.textContent = '';
        warningEl.style.display = 'none';
    }
}

buttonEl.addEventListener('click', displayWarning);
