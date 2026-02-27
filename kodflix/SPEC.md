# KodFlix - Netflix-style Movie App

## Project Overview
- **Project name**: KodFlix
- **Type**: Single Page React Web Application
- **Core functionality**: Fetch and display movies from OMDB API in a Netflix-style horizontal carousel layout
- **Target users**: Movie enthusiasts browsing a movie catalog

## UI/UX Specification

### Layout Structure
- **Header**: Fixed top navigation with logo (left) and search bar (center-right)
- **Hero Section**: Featured movie with full-width background image, title, and description
- **Content Rows**: Horizontal scrolling movie carousels organized by category
- **Footer**: Minimal footer with links

### Responsive Breakpoints
- Mobile: < 768px (2-3 movies visible per row)
- Tablet: 768px - 1024px (4-5 movies visible)
- Desktop: > 1024px (6-7 movies visible)

### Visual Design

#### Color Palette
- Primary Background: `#141414` (Netflix dark)
- Secondary Background: `#1f1f1f`
- Accent/CTA: `#e50914` (Netflix red)
- Text Primary: `#ffffff`
- Text Secondary: `#b3b3b3`
- Hover Overlay: `rgba(0, 0, 0, 0.7)`

#### Typography
- Font Family: 'Bebas Neue' for titles, 'Source Sans Pro' for body
- Logo: 32px bold
- Movie Title: 16px
- Category Title: 24px bold
- Hero Title: 48px bold
- Hero Description: 18px

#### Spacing System
- Row padding: 40px vertical, 20px horizontal
- Movie card gap: 10px
- Section margin: 30px

#### Visual Effects
- Movie cards: Scale 1.1 on hover with smooth transition (0.3s)
- Hero: Gradient overlay from transparent to dark
- Scroll: Horizontal scroll with hidden scrollbar
- Box shadows on hover

### Components

#### Header
- Logo "KODFLIX" in red
- Search input with magnifying glass icon
- Dark background with slight blur

#### Hero Section
- Full viewport width, 70vh height
- Background image with gradient overlay
- "Featured" badge
- Movie title, year, rating, description
- "Play" and "More Info" buttons

#### Movie Row
- Category title (e.g., "Trending Now", "Action Movies")
- Horizontal scrollable container
- Movie cards with poster image
- Hover state: enlarged card with shadow

#### Movie Card
- Poster image (portrait orientation)
- 150px width on desktop, responsive
- Hover: Scale up, show title overlay
- Cursor pointer

#### Footer
- Simple links in gray
- Copyright text

## Functionality Specification

### Core Features
1. **OMDB API Integration**
   - Fetch trending/popular movies using search endpoint
   - Use multiple search queries to get diverse categories
   - API Key: "adb124d3"

2. **Categories to Fetch**
   - "trending": Popular movies
   - "action": Action movies
   - "comedy": Comedy movies
   - "horror": Horror movies
   - "drama": Drama movies

3. **Search Functionality**
   - Real-time search as user types
   - Debounced API calls (500ms)
   - Display search results in a row

4. **Carousel Navigation**
   - Horizontal scroll with arrow buttons
   - Click and drag support
   - Keyboard navigation

### User Interactions
- Hover on movie: Scale effect, show details
- Click movie: Could show modal (optional)
- Search: Filter movies by title
- Scroll: Navigate through movie rows

### Data Handling
- Cache API responses in state
- Loading states while fetching
- Error handling with retry option

### Edge Cases
- API failure: Show error message with retry
- No results: Show "No movies found" message
- Slow connection: Loading skeletons
- Missing poster: Placeholder image

## Acceptance Criteria
1. App loads without errors
2. Hero section displays a featured movie
3. Multiple movie rows display with horizontal scroll
4. Search functionality works and shows results
5. Hover effects work on movie cards
6. Responsive on mobile, tablet, and desktop
7. Colors and fonts match Netflix aesthetic
8. Data successfully fetched from OMDB API
