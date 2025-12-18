# ComicVerse - Comics Reader Website

A modern, fully-featured comics reader website built with HTML5, CSS3, and JavaScript.

## Features

### ✅ Main Modules

1. **Home Page** - Featured comics slider, latest updates, trending comics, genres, popular authors, and recommendations
2. **Comics Library** - Browse all comics with filters (genre, author, year, language) and sort options
3. **Comic Details Page** - Detailed view with chapters list, ratings, and reading options
4. **Reader/Reading Mode** - Page-by-page and scroll reading modes with dark/light theme, zoom, and bookmarks
5. **Genres Module** - Explore comics by genre with beautiful genre cards
6. **Authors Module** - Browse authors and view their profiles and comics
7. **Search Module** - Advanced search with auto-suggestions
8. **User Login/Register** - Authentication pages with social login options
9. **User Dashboard** - Reading history, favorites, downloads, and bookmarks
10. **Subscription/Premium** - Premium plans with payment integration UI
11. **Blog/News** - Latest updates and news about comics
12. **Contact Page** - Contact form and business information

## Design Features

- **Unique Design for Each Page** - Every page has its own distinct visual identity
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, intuitive interface with smooth animations
- **Dark/Light Mode** - Available in the reader for comfortable reading
- **Interactive Elements** - Hover effects, transitions, and animations throughout

## File Structure

```
Comics reader site/
├── index.html              # Home page
├── library.html            # Comics library
├── comic-detail.html       # Comic details page
├── reader.html             # Reading mode
├── genres.html             # Genres page
├── authors.html            # Authors listing
├── author-detail.html      # Author profile
├── login.html              # Login page
├── register.html           # Registration page
├── dashboard.html          # User dashboard
├── subscription.html       # Premium subscription
├── blog.html               # News/Blog page
├── contact.html            # Contact page
├── css/
│   ├── style.css          # Global styles
│   ├── home.css           # Home page styles
│   ├── library.css        # Library page styles
│   ├── comic-detail.css   # Comic detail styles
│   ├── reader.css         # Reader styles
│   ├── genres.css         # Genres styles
│   ├── authors.css        # Authors styles
│   ├── author-detail.css  # Author detail styles
│   ├── auth.css           # Login/Register styles
│   ├── dashboard.css      # Dashboard styles
│   ├── subscription.css   # Subscription styles
│   ├── blog.css           # Blog styles
│   └── contact.css        # Contact styles
├── js/
│   ├── main.js            # Global JavaScript
│   ├── home.js            # Home page functionality
│   ├── library.js         # Library functionality
│   ├── comic-detail.js    # Comic detail functionality
│   ├── reader.js          # Reader functionality
│   ├── genres.js          # Genres functionality
│   ├── authors.js         # Authors functionality
│   ├── auth.js            # Authentication functionality
│   ├── dashboard.js       # Dashboard functionality
│   ├── subscription.js    # Subscription functionality
│   └── contact.js         # Contact form functionality
└── README.md              # This file
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Navigate through the website using the navigation menu

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (with CSS Grid, Flexbox, and animations)
- Vanilla JavaScript (ES6+)
- No external dependencies

## Features by Page

### Home Page
- Hero slider with featured comics
- Latest updates section
- Trending comics list
- Genre grid
- Popular authors
- Recommended comics
- Download app section

### Library Page
- Grid and list view options
- Multiple filters (genre, author, year, language)
- Sort options (popular, newest, A-Z, rating)
- Pagination

### Reader Page
- Page-by-page and scroll reading modes
- Dark/light theme toggle
- Zoom in/out functionality
- Bookmark feature
- Chapter navigation
- Keyboard shortcuts
- Fullscreen mode

### Dashboard
- Reading history with progress
- Favorites management
- Downloaded comics
- Bookmarks list

### Subscription Page
- Free vs Premium comparison
- Annual and monthly plans
- Payment form UI (ready for Stripe/PayPal integration)

## Customization

All colors and styles can be customized by modifying the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    --dark-bg: #1a1a2e;
    --light-bg: #f8f9fa;
    /* ... */
}
```

## Notes

- This is a front-end template. Backend integration would be needed for:
  - User authentication
  - Payment processing
  - Data persistence
  - Real comic content loading
- All comic data is currently mocked for demonstration purposes
- Images are placeholder gradients - replace with actual comic covers

## License

This project is open source and available for personal and commercial use.

