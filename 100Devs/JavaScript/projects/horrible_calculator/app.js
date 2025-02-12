// Add an event listener to the "Calculate" button
document.getElementById('calculateButton').addEventListener('click', function () {
    // Get the result element
    const resultEl = document.querySelector('p');

    // Get the value from the first input field (num1)
    const num1 = parseFloat(document.querySelector('input:first-of-type').value);

    // Get the value from the second input field (arithmetic operator + number)
    const arithmeticOperator = document.querySelector('input:nth-of-type(2)').value.trim();

    // Validate the first input to ensure it's a number
    if (isNaN(num1)) {
        resultEl.textContent = "Please enter a valid number in the first field.";
        return;
    }

    // Ensure the second input is not empty
    if (arithmeticOperator === "") {
        resultEl.textContent = "Please enter a valid operation (e.g., + 5).";
        return;
    }

    // Extract the operator (first character)
    const operator = arithmeticOperator.charAt(0);

    // Extract the number (everything after the operator)
    const num2 = parseFloat(arithmeticOperator.slice(1).trim()); // Slice starting at index 1 to get the number

    // Check if the extracted number is valid
    if (isNaN(num2)) {
        resultEl.textContent = "Please enter a valid number after the operator.";
        return;
    }

    let result;

    // Perform the arithmetic operation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Cannot divide by zero!";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator!";
            break;
    }

    // Display the result in the <p> element
    resultEl.textContent = `Result: ${result}`;
});
