const endDate = new Date("2025-02-28T12:00:00"); // Change this date as needed

function updateCountdown() {
    const now = new Date();
    const difference = Math.max(0, endDate - now); // Use Math.max to prevent negative values

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (difference <= 0) {
        clearInterval(interval); // Stop the countdown when we reach the target date
    }
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);