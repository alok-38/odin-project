const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
    const now = new Date();

    // Get the current time in UTC (Coordinated Universal Time)
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();

    // Calculate the rotation for the second hand
    const secondsDegrees = ((utcSeconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Calculate the rotation for the minute hand
    const minutesDegrees = ((utcMinutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Calculate the rotation for the hour hand, including minutes for precision
    const hoursDegrees = ((utcHours % 12) / 12) * 360 + (utcMinutes / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Call setClock every second to update the hands
setInterval(setClock, 1000);

// Initialize the clock immediately
setClock();
