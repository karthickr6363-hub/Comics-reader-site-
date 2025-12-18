// Main JavaScript Functions

// Search Modal
function openSearch() {
    document.getElementById('searchModal').style.display = 'block';
    document.getElementById('searchInput').focus();
}

function closeSearch() {
    document.getElementById('searchModal').style.display = 'none';
}

// Close search modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('searchModal');
    if (event.target == modal) {
        closeSearch();
    }
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }
            
            // Mock search results
            const mockResults = [
                { title: 'The Last Guardian', type: 'Comic', author: 'Alex Thunder' },
                { title: 'Cyber Dreams', type: 'Comic', author: 'Maya Chen' },
                { title: 'Alex Thunder', type: 'Author', comics: 15 },
                { title: 'Action', type: 'Genre', comics: 1234 },
                { title: 'Shadow Warriors', type: 'Comic', author: 'Ryan Blade' },
            ];
            
            const filtered = mockResults.filter(item => 
                item.title.toLowerCase().includes(query)
            );
            
            displaySearchResults(filtered);
        });
        
        // Close on Escape key
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeSearch();
            }
        });
    }
});

function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        return;
    }
    
    searchResults.innerHTML = results.map(item => `
        <div class="search-result-item" onclick="handleSearchClick('${item.title}', '${item.type}')">
            <strong>${item.title}</strong>
            <span style="color: #999; margin-left: 10px;">${item.type}</span>
            ${item.author ? `<div style="color: #666; font-size: 0.9rem;">By ${item.author}</div>` : ''}
            ${item.comics ? `<div style="color: #666; font-size: 0.9rem;">${item.comics} comics</div>` : ''}
        </div>
    `).join('');
}

function handleSearchClick(title, type) {
    if (type === 'Comic') {
        window.location.href = 'comic-detail.html?title=' + encodeURIComponent(title);
    } else if (type === 'Author') {
        window.location.href = 'author-detail.html?name=' + encodeURIComponent(title);
    } else if (type === 'Genre') {
        window.location.href = 'genres.html?genre=' + encodeURIComponent(title.toLowerCase());
    }
    closeSearch();
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

