// Reader Page JavaScript

let currentZoom = 100;
let currentReadingMode = 'page';
let isBookmarked = false;
let isDarkMode = false;

document.addEventListener('DOMContentLoaded', function() {
    // Check for saved preferences
    const savedTheme = localStorage.getItem('readerTheme');
    const savedZoom = localStorage.getItem('readerZoom');
    const savedMode = localStorage.getItem('readingMode');
    
    if (savedTheme === 'dark') {
        toggleTheme();
    }
    
    if (savedZoom) {
        currentZoom = parseInt(savedZoom);
        applyZoom();
    }
    
    if (savedMode) {
        setReadingMode(savedMode);
    }
    
    // Check for continue reading
    checkContinueReading();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
    
    // Touch gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextChapter();
        }
        if (touchEndX > touchStartX + 50) {
            previousChapter();
        }
    }
});

function handleKeyboard(e) {
    // Arrow keys for navigation
    if (e.key === 'ArrowLeft') {
        previousPage();
    } else if (e.key === 'ArrowRight') {
        nextPage();
    } else if (e.key === 'ArrowUp') {
        previousChapter();
    } else if (e.key === 'ArrowDown') {
        nextChapter();
    } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        zoomIn();
    } else if (e.key === '-') {
        e.preventDefault();
        zoomOut();
    } else if (e.key === '0') {
        e.preventDefault();
        resetZoom();
    } else if (e.key === 'd' || e.key === 'D') {
        toggleTheme();
    } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
    } else if (e.key === 'b' || e.key === 'B') {
        toggleBookmark();
    }
}

function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeBtn');
    
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode', isDarkMode);
    body.classList.toggle('light-mode', !isDarkMode);
    
    themeBtn.textContent = isDarkMode ? '☀️' : '🌙';
    themeBtn.title = isDarkMode ? 'Light Mode' : 'Dark Mode';
    
    localStorage.setItem('readerTheme', isDarkMode ? 'dark' : 'light');
}

function zoomIn() {
    if (currentZoom < 200) {
        currentZoom += 10;
        applyZoom();
    }
}

function zoomOut() {
    if (currentZoom > 50) {
        currentZoom -= 10;
        applyZoom();
    }
}

function resetZoom() {
    currentZoom = 100;
    applyZoom();
}

function applyZoom() {
    const images = document.querySelectorAll('.page-image');
    images.forEach(img => {
        img.style.transform = `scale(${currentZoom / 100})`;
        img.style.transformOrigin = 'center top';
    });
    
    document.getElementById('zoomLevel').textContent = currentZoom + '%';
    localStorage.setItem('readerZoom', currentZoom);
}

function setReadingMode(mode) {
    currentReadingMode = mode;
    const pageMode = document.getElementById('pageMode');
    const scrollMode = document.getElementById('scrollMode');
    const modeBtns = document.querySelectorAll('.mode-btn');
    
    if (mode === 'page') {
        pageMode.style.display = 'flex';
        scrollMode.style.display = 'none';
    } else {
        pageMode.style.display = 'none';
        scrollMode.style.display = 'flex';
    }
    
    modeBtns.forEach(btn => {
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    localStorage.setItem('readingMode', mode);
}

function toggleBookmark() {
    isBookmarked = !isBookmarked;
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    
    if (isBookmarked) {
        bookmarkBtn.classList.add('active');
        bookmarkBtn.textContent = '🔖';
        bookmarkBtn.title = 'Remove Bookmark';
        // Save bookmark to localStorage or backend
        saveBookmark();
    } else {
        bookmarkBtn.classList.remove('active');
        bookmarkBtn.textContent = '🔖';
        bookmarkBtn.title = 'Bookmark';
        removeBookmark();
    }
}

function saveBookmark() {
    const bookmark = {
        comic: 'The Last Guardian',
        chapter: 1,
        page: 1,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
}

function removeBookmark() {
    localStorage.removeItem('bookmark');
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Error attempting to enable fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

function nextPage() {
    if (currentReadingMode === 'page') {
        const pages = document.querySelectorAll('.comic-page');
        const currentPage = document.querySelector('.comic-page:target') || pages[0];
        const currentIndex = Array.from(pages).indexOf(currentPage);
        
        if (currentIndex < pages.length - 1) {
            pages[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            nextChapter();
        }
    }
}

function previousPage() {
    if (currentReadingMode === 'page') {
        const pages = document.querySelectorAll('.comic-page');
        const currentPage = document.querySelector('.comic-page:target') || pages[0];
        const currentIndex = Array.from(pages).indexOf(currentPage);
        
        if (currentIndex > 0) {
            pages[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            previousChapter();
        }
    }
}

function nextChapter() {
    const select = document.getElementById('chapterSelect');
    const currentValue = parseInt(select.value);
    if (currentValue < select.options.length) {
        select.value = currentValue + 1;
        goToChapter();
    }
}

function previousChapter() {
    const select = document.getElementById('chapterSelect');
    const currentValue = parseInt(select.value);
    if (currentValue > 1) {
        select.value = currentValue - 1;
        goToChapter();
    }
}

function goToChapter() {
    const select = document.getElementById('chapterSelect');
    const chapter = select.value;
    // In a real app, this would load the chapter content
    console.log('Loading chapter:', chapter);
    // Reload page content or navigate
    window.location.href = `reader.html?chapter=${chapter}`;
}

function checkContinueReading() {
    const bookmark = localStorage.getItem('bookmark');
    if (bookmark) {
        const bookmarkData = JSON.parse(bookmark);
        if (bookmarkData.comic === 'The Last Guardian' && bookmarkData.chapter > 1) {
            document.getElementById('continueModal').style.display = 'flex';
        }
    }
}

function continueReading() {
    const bookmark = JSON.parse(localStorage.getItem('bookmark'));
    window.location.href = `reader.html?chapter=${bookmark.chapter}&page=${bookmark.page}`;
    closeContinueModal();
}

function closeContinueModal() {
    document.getElementById('continueModal').style.display = 'none';
}

// Fullscreen change event
document.addEventListener('fullscreenchange', function() {
    const isFullscreen = !!document.fullscreenElement;
    // Update UI if needed
});

