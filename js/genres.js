// Genres Page JavaScript

const genresData = [
    { name: 'Action', icon: '⚔️', count: 1234, color: 'action' },
    { name: 'Fantasy', icon: '🧙', count: 987, color: 'fantasy' },
    { name: 'Romance', icon: '💕', count: 756, color: 'romance' },
    { name: 'Manga', icon: '🎌', count: 2145, color: 'manga' },
    { name: 'Sci-Fi', icon: '🚀', count: 1432, color: 'sci-fi' },
    { name: 'Horror', icon: '👻', count: 654, color: 'horror' },
    { name: 'Superhero', icon: '🦸', count: 1876, color: 'superhero' },
    { name: 'Comedy', icon: '😂', count: 543, color: 'comedy' },
    { name: 'Drama', icon: '🎭', count: 432, color: 'drama' },
    { name: 'Mystery', icon: '🔍', count: 678, color: 'mystery' },
    { name: 'Thriller', icon: '⚡', count: 789, color: 'thriller' },
    { name: 'Adventure', icon: '🗺️', count: 1123, color: 'adventure' },
];

document.addEventListener('DOMContentLoaded', function() {
    renderGenres();
    
    // Check URL parameter for specific genre
    const urlParams = new URLSearchParams(window.location.search);
    const genre = urlParams.get('genre');
    if (genre) {
        // Filter or highlight specific genre
        highlightGenre(genre);
    }
});

function renderGenres() {
    const genresGrid = document.getElementById('genresGrid');
    
    genresGrid.innerHTML = genresData.map(genre => `
        <a href="library.html?genre=${genre.name.toLowerCase()}" class="genre-card-large" data-genre="${genre.color}">
            <span class="genre-icon-large">${genre.icon}</span>
            <h2>${genre.name}</h2>
            <p>Explore amazing ${genre.name.toLowerCase()} comics</p>
            <div class="genre-stats">
                <div class="genre-stat">
                    <span class="genre-stat-number">${genre.count}</span>
                    <span class="genre-stat-label">Comics</span>
                </div>
            </div>
        </a>
    `).join('');
}

function highlightGenre(genreName) {
    const cards = document.querySelectorAll('.genre-card-large');
    cards.forEach(card => {
        if (card.textContent.toLowerCase().includes(genreName.toLowerCase())) {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
        }
    });
}

