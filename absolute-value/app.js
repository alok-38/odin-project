const buttons = document.querySelectorAll('.button');

let position = 0;

const updateDisplay = () => {
    document.getElementById("positionDisplay").innerText = "Current Position: " + position;
}

const abs = (num) => {
    const validNumber = +num;
    if (Number.isNaN(validNumber)) throw new TypeError('Not a number!');
    return validNumber < 0 ? -validNumber : validNumber;
}

const move = (step) => {
    position += step;
    updateDisplay();
    document.getElementById("distanceDisplay").innerText = '';
}

const checkDistance = () => {
    const distance = abs(position);
    document.getElementById("distanceDisplay").innerText = `You are ${distance} steps from home! 🏠`;
}

updateDisplay();
