document.addEventListener('DOMContentLoaded', () => {
    const leaderboardBody = document.getElementById('leaderboard-body');

    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Define the prize amounts for each rank
    const prizes = [
        '$1,500',  // 1st Place
        '$1,000',  // 2nd Place
        '$700',    // 3rd Place
        '$500',    // 4th Place
        '$400',    // 5th Place
        '$300',    // 6th Place
        '$200',    // 7th Place
        '$150',    // 8th Place
        '$125',    // 9th Place
        '$125'     // 10th Place
    ];

    // Function to render leaderboard
    const renderLeaderboard = () => {
        leaderboardBody.innerHTML = '';
        leaderboard.sort((a, b) => b.wager - a.wager); // Sort by wager descending

        leaderboard.slice(0, 10).forEach((user, index) => {
            const row = document.createElement('tr');
            let rankClass = '';

            // Assign special class for top 3 players
            if (index === 0) rankClass = 'gold';
            if (index === 1) rankClass = 'silver';
            if (index === 2) rankClass = 'bronze';

            row.className = rankClass;
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.username}</td>
                <td>$${user.wager.toLocaleString()}</td>
                <td>${prizes[index]}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    };

    // Initial render
    renderLeaderboard();
});
