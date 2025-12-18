// Library Page JavaScript

let currentView = 'grid';
let currentPage = 1;
let comicsData = [];

// Mock comics data
const mockComics = [
    { id: 1, title: 'The Guardian', author: 'Alex Thunder', genre: 'superhero', year: 2024, language: 'english', rating: 4.8, views: 12500, chapters: 45 },
    { id: 2, title: 'Cyber Dreams', author: 'Maya Chen', genre: 'sci-fi', year: 2024, language: 'english', rating: 4.9, views: 18200, chapters: 32 },
    { id: 3, title: 'Shadow Warriors', author: 'Ryan Blade', genre: 'action', year: 2023, language: 'english', rating: 4.7, views: 9800, chapters: 28 },
    { id: 4, title: 'Dragon\'s Quest', author: 'Sarah Moon', genre: 'fantasy', year: 2024, language: 'english', rating: 4.8, views: 12500, chapters: 45 },
    { id: 5, title: 'Neon Nights', author: 'Jake Neon', genre: 'sci-fi', year: 2023, language: 'english', rating: 4.9, views: 18200, chapters: 32 },
    { id: 6, title: 'Mystic Realm', author: 'Luna Star', genre: 'fantasy', year: 2024, language: 'english', rating: 4.7, views: 9800, chapters: 28 },
    { id: 7, title: 'Space Odyssey', author: 'Max Cosmos', genre: 'sci-fi', year: 2023, language: 'english', rating: 4.6, views: 15300, chapters: 51 },
    { id: 8, title: 'Forest Spirits', author: 'Eva Green', genre: 'fantasy', year: 2024, language: 'english', rating: 4.8, views: 11700, chapters: 19 },
    { id: 9, title: 'Time Rift', author: 'Chrono Master', genre: 'sci-fi', year: 2024, language: 'english', rating: 4.9, views: 20100, chapters: 37 },
    { id: 10, title: 'Supernova Rising', author: 'Nova Prime', genre: 'superhero', year: 2024, language: 'english', rating: 4.9, views: 25000, chapters: 42 },
    { id: 11, title: 'Dark Matter', author: 'Void Writer', genre: 'horror', year: 2023, language: 'english', rating: 4.7, views: 21000, chapters: 35 },
    { id: 12, title: 'Quantum Leap', author: 'Dr. Quantum', genre: 'sci-fi', year: 2024, language: 'english', rating: 4.8, views: 18000, chapters: 29 },
    { id: 13, title: 'Eternal Flame', author: 'Phoenix Art', genre: 'fantasy', year: 2023, language: 'english', rating: 4.6, views: 15000, chapters: 24 },
    { id: 14, title: 'Ocean Depths', author: 'Aqua Artist', genre: 'fantasy', year: 2024, language: 'english', rating: 4.7, views: 13200, chapters: 31 },
    { id: 15, title: 'Stellar Wars', author: 'Galaxy Master', genre: 'sci-fi', year: 2024, language: 'english', rating: 4.9, views: 22000, chapters: 48 },
    { id: 16, title: 'Love Story', author: 'Romance Writer', genre: 'romance', year: 2024, language: 'english', rating: 4.5, views: 9800, chapters: 22 },
    { id: 17, title: 'Samurai Code', author: 'Manga Master', genre: 'manga', year: 2023, language: 'japanese', rating: 4.8, views: 19500, chapters: 56 },
    { id: 18, title: 'Nightmare', author: 'Horror King', genre: 'horror', year: 2023, language: 'english', rating: 4.6, views: 11200, chapters: 18 },
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    comicsData = [...mockComics];
    renderComics();
    
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const sort = urlParams.get('sort');
    if (sort) {
        document.getElementById('sortSelect').value = sort;
        sortComics();
    }
});

function setView(view) {
    currentView = view;
    const container = document.getElementById('comicsContainer');
    const viewBtns = document.querySelectorAll('.view-btn');
    
    viewBtns.forEach(btn => {
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    if (view === 'grid') {
        container.className = 'comics-grid-view';
    } else {
        container.className = 'comics-list-view';
    }
    
    renderComics();
}

function renderComics() {
    const container = document.getElementById('comicsContainer');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const noResults = document.getElementById('noResults');
    
    if (comicsData.length === 0) {
        container.innerHTML = '';
        loadingIndicator.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    loadingIndicator.style.display = 'none';
    noResults.style.display = 'none';
    
    container.innerHTML = comicsData.map(comic => {
        const coverStyles = getCoverStyleForComic(comic);
        const gradient = coverStyles.background;
        const emoji = coverStyles.emoji;
        
        if (currentView === 'grid') {
            return `
                <div class="library-comic-card" onclick="window.location.href='comic-detail.html?id=${comic.id}'">
                    <div class="library-comic-cover" style="background: ${gradient};">
                        <div class="library-comic-emoji">${emoji}</div>
                    </div>
                    <div class="library-comic-info">
                        <h3>${comic.title}</h3>
                        <p class="library-comic-author">By ${comic.author}</p>
                        <div class="library-comic-meta">
                            <span class="library-comic-rating">⭐ ${comic.rating}</span>
                            <span class="library-comic-views">👁 ${(comic.views / 1000).toFixed(1)}k</span>
                        </div>
                        <div class="library-comic-genres">
                            <span class="genre-tag">${comic.genre}</span>
                        </div>
                        <div class="library-comic-actions">
                            <a href="reader.html?id=${comic.id}" class="btn-read" onclick="event.stopPropagation()">Read</a>
                            <button class="btn-favorite" onclick="event.stopPropagation(); toggleFavorite(${comic.id})">❤️</button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="library-comic-card" onclick="window.location.href='comic-detail.html?id=${comic.id}'">
                    <div class="library-comic-cover" style="background: ${gradient};">
                        <div class="library-comic-emoji">${emoji}</div>
                    </div>
                    <div class="library-comic-info">
                        <h3>${comic.title}</h3>
                        <p class="library-comic-author">By ${comic.author}</p>
                        <p style="color: var(--text-light); margin: 0.5rem 0;">${comic.chapters} chapters • ${comic.year}</p>
                        <div class="library-comic-meta">
                            <span class="library-comic-rating">⭐ ${comic.rating}</span>
                            <span class="library-comic-views">👁 ${(comic.views / 1000).toFixed(1)}k views</span>
                        </div>
                        <div class="library-comic-genres">
                            <span class="genre-tag">${comic.genre}</span>
                        </div>
                    </div>
                    <div class="library-comic-actions" style="flex-direction: column; padding: 1.5rem;">
                        <a href="reader.html?id=${comic.id}" class="btn-read" onclick="event.stopPropagation()">Read Now</a>
                        <button class="btn-favorite" onclick="event.stopPropagation(); toggleFavorite(${comic.id})" style="width: 100%;">❤️ Favorite</button>
                    </div>
                </div>
            `;
        }
    }).join('');
}

function getCoverStyleForComic(comic) {
    // Default styles based on genre
    let background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    let emoji = '📚';

    switch (comic.title) {
        case 'The Last Guardian':
            background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
            emoji = '🛡️';
            break;
        case 'Cyber Dreams':
            background = 'linear-gradient(135deg, #141e30 0%, #243b55 100%)';
            emoji = '🤖';
            break;
        case 'Shadow Warriors':
            background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
            emoji = '🥷';
            break;
        case "Dragon's Quest":
            background = 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)';
            emoji = '🐉';
            break;
        case 'Neon Nights':
            background = 'linear-gradient(135deg, #12c2e9 0%, #c471ed 50%, #f64f59 100%)';
            emoji = '🌃';
            break;
        case 'Mystic Realm':
            background = 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)';
            emoji = '🔮';
            break;
        case 'Space Odyssey':
            background = 'linear-gradient(135deg, #000428 0%, #004e92 100%)';
            emoji = '🛰️';
            break;
        case 'Forest Spirits':
            background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
            emoji = '🌲';
            break;
        case 'Time Rift':
            background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            emoji = '⏳';
            break;
        case 'Supernova Rising':
            background = 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)';
            emoji = '🌟';
            break;
        case 'Dark Matter':
            background = 'linear-gradient(135deg, #000000 0%, #434343 100%)';
            emoji = '🕳️';
            break;
        case 'Quantum Leap':
            background = 'linear-gradient(135deg, #24c6dc 0%, #514a9d 100%)';
            emoji = '⚛️';
            break;
        case 'Eternal Flame':
            background = 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)';
            emoji = '🔥';
            break;
        case 'Ocean Depths':
            background = 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)';
            emoji = '🐙';
            break;
        case 'Stellar Wars':
            background = 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)';
            emoji = '🚀';
            break;
        case 'Love Story':
            background = 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)';
            emoji = '💕';
            break;
        case 'Samurai Code':
            background = 'linear-gradient(135deg, #314755 0%, #26a0da 100%)';
            emoji = '🗡️';
            break;
        case 'Nightmare':
            background = 'linear-gradient(135deg, #232526 0%, #414345 100%)';
            emoji = '👻';
            break;
        default:
            // Fallback to genre-based styles
            switch (comic.genre) {
                case 'sci-fi':
                    background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
                    emoji = '🚀';
                    break;
                case 'fantasy':
                    background = 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)';
                    emoji = '🧙';
                    break;
                case 'horror':
                    background = 'linear-gradient(135deg, #232526 0%, #414345 100%)';
                    emoji = '👻';
                    break;
                case 'romance':
                    background = 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)';
                    emoji = '💕';
                    break;
            }
    }

    return { background, emoji };
}

function filterComics() {
    const genre = document.getElementById('genreFilter').value;
    const author = document.getElementById('authorFilter').value;
    const year = document.getElementById('yearFilter').value;
    const language = document.getElementById('languageFilter').value;
    
    comicsData = mockComics.filter(comic => {
        const matchGenre = genre === 'all' || comic.genre === genre;
        const matchAuthor = author === 'all' || comic.author.toLowerCase().replace(/\s+/g, '-') === author;
        const matchYear = year === 'all' || comic.year.toString() === year;
        const matchLanguage = language === 'all' || comic.language === language;
        
        return matchGenre && matchAuthor && matchYear && matchLanguage;
    });
    
    renderComics();
}

function sortComics() {
    const sortBy = document.getElementById('sortSelect').value;
    
    comicsData.sort((a, b) => {
        switch(sortBy) {
            case 'popular':
                return b.views - a.views;
            case 'newest':
                return b.year - a.year;
            case 'az':
                return a.title.localeCompare(b.title);
            case 'za':
                return b.title.localeCompare(a.title);
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });
    
    renderComics();
}

function clearFilters() {
    document.getElementById('genreFilter').value = 'all';
    document.getElementById('authorFilter').value = 'all';
    document.getElementById('yearFilter').value = 'all';
    document.getElementById('languageFilter').value = 'all';
    document.getElementById('sortSelect').value = 'popular';
    
    comicsData = [...mockComics];
    sortComics();
}

function toggleFavorite(id) {
    const btn = event.target.closest('.btn-favorite');
    btn.classList.toggle('active');
    // In a real app, this would save to backend
}

function changePage(direction) {
    // Pagination logic would go here
    console.log('Change page:', direction);
}

function toggleFiltersPanel() {
    document.body.classList.toggle('filters-open');
}

