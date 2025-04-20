const buttonEl = document.querySelector('button');
const inputEls = document.querySelectorAll('input');
const warningEl = document.querySelector('.warning');
const tableBody = document.querySelector('table tbody tr');


function renderBookInfo(event) {
    event.preventDefault();

    // Check if any input is empty
    const hasEmptyInput = Array.from(inputEls).some(input => input.value.trim() === '');

    if (hasEmptyInput) {
        displayWarning();
        return;
    }

    // Clear any previous warning
    warningEl.style.display = 'none';
    warningEl.textContent = '';

    // Create a new table row
    const newRow = document.createElement('tr');

    // Populate the row with td elements from input values
    inputEls.forEach(input => {
        const td = document.createElement('td');
        td.textContent = input.value.trim();
        newRow.appendChild(td);
    });

    // Append the new row to the table body
    const tableBody = document.querySelector('table tbody');
    tableBody.appendChild(newRow);

    inputEls.forEach(input => input.value = '');
}


function displayWarning() {
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

buttonEl.addEventListener('click', renderBookInfo);
