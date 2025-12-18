// Authors Page JavaScript

const authorsData = [
    { 
        id: 1,
        name: 'Alex Thunder', 
        bio: 'Award-winning comic artist specializing in superhero stories.',
        comics: 15, 
        followers: 12500, 
        rating: 4.9,
        avatar: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        emoji: '⚡'
    },
    { 
        id: 2,
        name: 'Maya Chen', 
        bio: 'Sci-fi visionary creating immersive futuristic worlds.',
        comics: 12, 
        followers: 9800, 
        rating: 4.8,
        avatar: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        emoji: '🚀'
    },
    { 
        id: 3,
        name: 'Ryan Blade', 
        bio: 'Master of action-packed adventure stories.',
        comics: 18, 
        followers: 15200, 
        rating: 4.7,
        avatar: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        emoji: '🗡️'
    },
    { 
        id: 4,
        name: 'Sarah Moon', 
        bio: 'Fantasy storyteller bringing magical worlds to life.',
        comics: 10, 
        followers: 8700, 
        rating: 4.9,
        avatar: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        emoji: '🌙'
    },
    { 
        id: 5,
        name: 'Jake Neon', 
        bio: 'Cyberpunk artist with a unique neon aesthetic.',
        comics: 8, 
        followers: 11200, 
        rating: 4.8,
        avatar: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        emoji: '💾'
    },
    { 
        id: 6,
        name: 'Luna Star', 
        bio: 'Mystical fantasy creator exploring cosmic themes.',
        comics: 14, 
        followers: 10300, 
        rating: 4.6,
        avatar: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        emoji: '⭐'
    },
];

let filteredAuthors = [...authorsData];

document.addEventListener('DOMContentLoaded', function() {
    renderAuthors();
});

function renderAuthors() {
    const authorsGrid = document.getElementById('authorsGrid');
    
    authorsGrid.innerHTML = filteredAuthors.map(author => `
        <a href="author-detail.html?id=${author.id}" class="author-card-detailed">
            <div class="author-avatar-large" style="background: ${author.avatar};">
                <div class="author-avatar-emoji">${author.emoji || '👤'}</div>
            </div>
            <h2 class="author-name">${author.name}</h2>
            <p class="author-bio">${author.bio}</p>
            <div class="author-stats">
                <div class="author-stat">
                    <span class="author-stat-number">${author.comics}</span>
                    <span class="author-stat-label">Comics</span>
                </div>
                <div class="author-stat">
                    <span class="author-stat-number">${(author.followers / 1000).toFixed(1)}k</span>
                    <span class="author-stat-label">Followers</span>
                </div>
            </div>
            <div class="author-rating-badge">
                ⭐ ${author.rating}
            </div>
        </a>
    `).join('');
}

function filterAuthors() {
    const searchTerm = document.getElementById('authorSearch').value.toLowerCase();
    
    filteredAuthors = authorsData.filter(author => 
        author.name.toLowerCase().includes(searchTerm) ||
        author.bio.toLowerCase().includes(searchTerm)
    );
    
    renderAuthors();
}

