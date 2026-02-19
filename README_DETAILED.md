# Nexus 3D - Project Documentation

## 1. Project Overview
Nexus 3D is a modern, high-performance web application built for an architectural visualization studio. It showcases 3D rendering, walkthroughs, and animation services through a visually immersive interface. The application includes a dynamic portfolio, a blog system, and a secured admin panel for content management, all powered by Firebase.

## 2. Technology Stack
- **Frontend Framework**: React (v18) with Vite for fast tooling.
- **Styling**: Tailwind CSS for utility-first styling.
- **Animations**: Framer Motion for complex animations and transitions.
- **Routing**: React Router DOM (v6).
- **Backend / Database**: Firebase Firestore (NoSQL database).
- **Authentication**: Firebase Authentication.
- **Icons**: React Icons (FontAwesome, etc.).
- **Media**: `react-player` for video embedding.

## 3. Project Structure
The project follows a standard React + Vite structure:

```
nexus3d.in/
├── src/
│   ├── Components/        # All page components and UI widgets
│   ├── assets/           # Static assets (images, global styles)
│   ├── App.jsx           # Main application component & Routing
│   ├── main.jsx          # Entry point
│   ├── firebase.js       # Firebase configuration & initialization
│   └── index.css         # Global Tailwind directives
├── public/               # Public static files
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 4. Key Features & Pages

### 4.1. Public Pages
- **Home (`/`)**: 
  - Features a cinematic video background hero section.
  - "Why Choose Us" section with animated value propositions.
  - Service highlights and testimonial slider.
  - Interactive "Call to Action" elements.

- **Services (`/services`)**:
  - Detailed listing of services including 3D Rendering, Walkthroughs, and Cartoon Animation.
  - animated cards with hover effects.

- **Portfolio (`/projects`)**:
  - **Dynamic Content**: Fetches projects from Firestore in real-time.
  - **Filtering**: Tabs for '3D Renderings', 'Walkthroughs', and 'Cartoon Animation'.
  - **Interactive Modals**: Full-screen image viewer and video player overlay.

- **Blog (`/blog`)**:
  - Displays articles fetched from Firebase.
  - **Fallback Mechanism**: Includes built-in fallback content ("The First Render Is Never the Final Render") if the database is empty.
  - **Single Page Experience**: Detailed post view is handled within the same component using conditional rendering (no separate route for individual posts).

- **About Us (`/about`)**:
  - **Animated Statistics**: Counters for "Projects Completed", "Happy Clients", etc.
  - **Timeline**: Visual journey of the company from 2018 to present.
  - **Core Values**: Grid layout of company principles.

- **Contact (`/contact`)**:
  - **Form Behavior**: The contact form logic uses `mailto:` links to open the user's default email client with pre-filled subject and body. It does **not** store messages in a database.
  - **Business Info**: Displays Phone, Email, WhatsApp links, Location, and Business Hours.

### 4.2. Admin Panel (`/admin-panel`)
A protected route for content management.
- **Authentication**: Requires email/password login via Firebase Auth.
- **Dashboard Features**:
  - **Project Management**: Add/Delete images and videos for the portfolio.
  - **Blog Management**: Create, Edit, and Delete blog posts.
  - **Real-time Sync**: Updates are immediately reflected on the public site.

## 5. Component Breakdown

| Component | Description |
|-----------|-------------|
| `App.jsx` | Defines app routes, layout wrapper (Sidebar, Footer, ScrollToTop). |
| `Home.jsx` | Landing page logic, sophisticated Framer Motion animations. |
| `ProjectsFirebase.jsx` | Portfolio logic, handles Firestore subscriptions and filtering. |
| `AdminPanelFirebase.jsx` | CMS logic, handles Auth, CRUD operations for projects/blogs. |
| `Blog.jsx` | Blog feed and post detail view. Handles fallback content. |
| `Contact.jsx` | Contact form with `mailto` logic and contact details. |
| `AboutUs.jsx` | Company info with animated counters and timeline. |
| `Sidebar.jsx` | Navigation menu implementation. |
| `Footer.jsx` | Site footer with links and info. |

## 6. Data Model (Firebase Firestore)

### Collection: `projects`
Stores portfolio items.
- `category` (string): 'architecture', 'walkthroughs', or 'cartoon'.
- `url` (string): URL of the image or video (YouTube/Vimeo).
- `timestamp` (timestamp): For sorting.

### Collection: `blogs`
Stores blog posts.
- `title` (string): Title of the post.
- `author` (string): Author name.
- `content` (string): Full text content.
- `excerpt` (string): Short summary.
- `timestamp` (timestamp): Publication date.

## 7. Setup & Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd nexus3d.in
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Ensure `src/firebase.js` is configured with your Firebase project credentials.

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

5.  **Build for Production**:
    ```bash
    npm run build
    ```

## 8. Deployment
The project is configured for Vercel (indicated by `vercel.json`).
- **Build Command**: `vite build`
- **Output Directory**: `dist`

## 9. Performance Optimizations
- **Lazy Loading**: Images and videos are optimized.
- **Code Splitting**: Vite automatically splits chunks.
- **Memoization**: `useMemo` and `useCallback` are used in heavy components like `ProjectsFirebase` to prevent unnecessary re-renders.
