// Set the target date to 12:00 AM PST (Pacific Standard Time) on July 25, 2023
const targetDate = new Date('2023-07-25T00:00:00-07:00');

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    // Target date has passed
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('milliseconds').textContent = '000';
    clearInterval(interval);
    return;
  }

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  const milliseconds = timeDifference % 1000;

  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  document.getElementById('milliseconds').textContent = milliseconds.toString().padStart(3, '0');
}

// Update the countdown every 10 milliseconds for smooth display
const interval = setInterval(updateCountdown, 10);
