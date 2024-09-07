document.addEventListener('DOMContentLoaded', () => {
    const countdown = document.getElementById('countdown-timer');
    
    function updateCountdown() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        
        // Get the first day of the next month, then subtract one second to get the last day of the current month
        const endOfMonth = new Date(year, month + 1, 1).getTime() - 1;
        const timeRemaining = endOfMonth - now.getTime();
        
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        // Update the countdown display
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (timeRemaining <= 0) {
            clearInterval(interval);
            countdown.textContent = "The leaderboard has ended!";
        }
    }

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);
});
