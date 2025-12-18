// Comic Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadChapters();
});

function loadChapters() {
    const chaptersList = document.getElementById('chaptersList');
    const totalChapters = 45;
    
    let chaptersHTML = '';
    
    for (let i = totalChapters; i >= 1; i--) {
        const isPremium = i > 5; // First 5 chapters are free
        const status = isPremium ? 'premium' : 'free';
        const statusText = isPremium ? 'Premium' : 'Free';
        const date = new Date(2024, 0, i).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        
        chaptersHTML += `
            <div class="chapter-item" onclick="window.location.href='reader.html?chapter=${i}'">
                <div class="chapter-number">Ch. ${i}</div>
                <div class="chapter-info">
                    <h3>Chapter ${i}: The Journey Continues</h3>
                    <div class="chapter-meta">
                        <span>📅 ${date}</span>
                        <span>👁 ${(Math.random() * 5000 + 1000).toFixed(0)} views</span>
                    </div>
                </div>
                <span class="chapter-status ${status}">${statusText}</span>
                <a href="reader.html?chapter=${i}" class="btn-read-chapter" onclick="event.stopPropagation()">Read</a>
            </div>
        `;
    }
    
    chaptersList.innerHTML = chaptersHTML;
}

let sortOrder = 'desc';

function sortChapters() {
    const chaptersList = document.getElementById('chaptersList');
    const chapters = Array.from(chaptersList.children);
    
    sortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
    
    chapters.sort((a, b) => {
        const numA = parseInt(a.querySelector('.chapter-number').textContent.match(/\d+/)[0]);
        const numB = parseInt(b.querySelector('.chapter-number').textContent.match(/\d+/)[0]);
        
        return sortOrder === 'desc' ? numB - numA : numA - numB;
    });
    
    chapters.forEach(chapter => chaptersList.appendChild(chapter));
    
    const btnSort = document.querySelector('.btn-sort');
    btnSort.textContent = `Sort: ${sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}`;
}

function toggleFavorite() {
    const btn = document.querySelector('.btn-favorite-main');
    const icon = document.getElementById('favoriteIcon');
    
    btn.classList.toggle('active');
    
    if (btn.classList.contains('active')) {
        icon.textContent = '❤️';
        btn.innerHTML = '<span id="favoriteIcon">❤️</span> Added to Favorites';
    } else {
        icon.textContent = '🤍';
        btn.innerHTML = '<span id="favoriteIcon">🤍</span> Add to Favorites';
    }
}

function shareComic() {
    if (navigator.share) {
        navigator.share({
            title: 'The Last Guardian',
            text: 'Check out this amazing comic!',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
}

