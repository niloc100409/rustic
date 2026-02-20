const grid = document.getElementById('game-grid');
const modal = document.getElementById('player-modal');
const frame = document.getElementById('game-frame');

// Fetch and display games
fetch('games.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <p>${game.title}</p>
            `;
            card.onclick = () => launchGame(game.url);
            grid.appendChild(card);
        });
    });

function launchGame(url) {
    frame.src = url;
    modal.style.display = 'block';
}

function closeGame() {
    modal.style.display = 'none';
    frame.src = ''; // Stops the game audio/processing
}
