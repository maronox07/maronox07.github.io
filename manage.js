// Manage.js
document.addEventListener('DOMContentLoaded', () => {
    const leaderboardForm = document.getElementById('leaderboard-form');
    const leaderboardBody = document.getElementById('leaderboard-body');
    
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Function to render leaderboard
    const renderLeaderboard = () => {
        leaderboardBody.innerHTML = '';
        leaderboard.sort((a, b) => b.wager - a.wager); // Sort by wager descending
        leaderboard.slice(0, 10).forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.username}</td>
                <td>$${user.wager.toLocaleString()}</td>
                <td class="actions"><button onclick="deleteUser('${user.username}')">Delete</button></td>
            `;
            leaderboardBody.appendChild(row);
        });
    };

    // Add/Update user on form submit
    leaderboardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const wager = parseFloat(document.getElementById('wager').value);

        const existingUserIndex = leaderboard.findIndex(user => user.username === username);
        if (existingUserIndex > -1) {
            leaderboard[existingUserIndex].wager = wager; // Update existing user
        } else {
            leaderboard.push({ username, wager }); // Add new user
        }

        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        renderLeaderboard();

        // Reset form
        leaderboardForm.reset();
    });

    // Delete user
    window.deleteUser = (username) => {
        leaderboard = leaderboard.filter(user => user.username !== username);
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        renderLeaderboard();
    };

    // Initial render
    renderLeaderboard();
});
