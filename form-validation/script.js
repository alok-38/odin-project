document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting

    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const message = document.querySelector('p');

    // Simple email checks
    if (!email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".net") && !email.endsWith(".org"))) {
        message.textContent = "Please enter a valid email!";
        message.style.color = "#d42020";
    } else {
        message.textContent = "Form submitted successfully!";
        message.style.color = "#20d450";
    }
});
