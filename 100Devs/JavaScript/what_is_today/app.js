document.querySelector("#check").addEventListener('click', check);

function check() {
    // Get user input and standerdize it
    const dayInput = document.querySelector("#week").value.trim().toLowerCase();
    const currentDay = new Date().toLocaleString('en-us')
}