const buttonEl = document.querySelector('button');
const bodyEl = document.querySelector('body');

// check if dark is stored in local storage
if (localStorage.getItem('theme') === 'dark') {
    bodyEl.classList.add('dark');
    buttonEl.textContent = "Switch to Light Mode";
}

// Add event listener for button click
buttonEl.addEventListener('click', () => {
    // Toggle theme using conditionals
    if (bodyEl.classList.contains('dark')) {
        bodyEl.classList.remove('dark');
        buttonEl.textContent = "Switch to Dark Mode";
        localStorage.setItem('theme', 'light'); // Save light theme preference
    } else {
        bodyEl.classList.add('dark');
        buttonEl.textContent = "Switch to Light Mode";
        localStorage.setItem('theme', 'dark'); // Save dark theme preference
    }
});