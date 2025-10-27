# Nexus 3D - Color & Gradient Guide

## Brand Colors

### Primary Gradients

#### Blue-Cyan (Primary)
```css
bg-gradient-to-r from-blue-400 to-cyan-400
/* Use for: Primary CTAs, main headings, statistics */
```

#### Purple-Pink (Secondary)
```css
bg-gradient-to-r from-purple-400 to-pink-400
/* Use for: Secondary CTAs, highlights, alternate sections */
```

#### Rainbow (Hero/Special)
```css
bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
/* Use for: Main page titles, hero sections, special highlights */
```

---

## Service-Specific Gradients

Each service type has its own unique gradient for visual distinction:

- **Blue-Cyan**: `from-blue-500 to-cyan-500` - Architectural Visualization
- **Purple-Pink**: `from-purple-500 to-pink-500` - Rendering Services
- **Green-Teal**: `from-green-500 to-teal-500` - 3D Modeling
- **Orange-Red**: `from-orange-500 to-red-500` - 2D Animation
- **Indigo-Blue**: `from-indigo-500 to-blue-500` - 3D Walkthrough
- **Pink-Rose**: `from-pink-500 to-rose-500` - Visualization Services
- **Cyan-Blue**: `from-cyan-500 to-blue-500` - 3D Animation
- **Yellow-Orange**: `from-yellow-500 to-orange-500` - Rendering
- **Violet-Purple**: `from-violet-500 to-purple-500` - Designing
- **Emerald-Green**: `from-emerald-500 to-green-500` - Animation
- **Red-Pink**: `from-red-500 to-pink-500` - Architectural Animation
- **Teal-Cyan**: `from-teal-500 to-cyan-500` - Renderings

---

## Contact & Action Colors

### Phone/Call
```css
bg-gradient-to-r from-blue-400 to-cyan-400
/* Blue gradient for phone/call actions */
```

### Email
```css
bg-gradient-to-r from-purple-400 to-pink-400
/* Purple-pink for email actions */
```

### WhatsApp
```css
bg-gradient-to-r from-green-400 to-teal-400
/* Green for WhatsApp (brand colors) */
```

### Location/Map
```css
bg-gradient-to-r from-red-400 to-pink-400
/* Red-pink for location markers */
```

---

## Background Colors

### Main Backgrounds
- Pure Black: `bg-black` (#000000)
- Dark Gray: `bg-gray-900` (#111827)
- Medium Gray: `bg-gray-800` (#1f2937)

### Gradient Backgrounds
```css
/* Page backgrounds */
bg-gradient-to-b from-black via-gray-900 to-black

/* Card backgrounds */
bg-gradient-to-br from-gray-800 to-gray-900
```

---

## Text Colors

### Main Text
- White: `text-white` (#FFFFFF)
- Light Gray: `text-gray-300` (#D1D5DB)
- Medium Gray: `text-gray-400` (#9CA3AF)
- Dark Gray: `text-gray-500` (#6B7280)

### Gradient Text (using bg-clip-text)
```css
/* Blue gradient text */
bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent

/* Purple gradient text */
bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent

/* Rainbow gradient text */
bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent
```

---

## Shadow & Glow Effects

### Default Shadows
```css
shadow-xl      /* Large shadow for cards */
shadow-2xl     /* Extra large shadow for important elements */
shadow-lg      /* Medium shadow for buttons */
```

### Colored Shadows (Glow Effects)
```css
hover:shadow-blue-500/50    /* Blue glow on hover */
hover:shadow-purple-500/50  /* Purple glow on hover */
hover:shadow-green-500/50   /* Green glow on hover */
hover:shadow-pink-500/50    /* Pink glow on hover */
```

---

## Border Colors

### Standard Borders
```css
border-gray-700    /* Default card borders */
border-gray-600    /* Hover state borders */
border-gray-800    /* Darker separators */
```

### Transparent Borders
```css
border-white/20    /* Light transparent border */
border-white/10    /* Very light transparent border */
```

---

## Opacity Variations

### Background Opacity
```css
bg-black/70        /* 70% opacity black overlay */
bg-black/50        /* 50% opacity black overlay */
bg-black/80        /* 80% opacity black overlay */
bg-white/10        /* 10% opacity white background */
bg-white/20        /* 20% opacity white background */
```

### Service-specific with opacity
```css
from-blue-500/20 to-cyan-500/20    /* Light blue gradient background */
from-purple-500/20 to-pink-500/20  /* Light purple gradient background */
```

---

## Usage Guidelines

### ✅ DO:
- Use gradient text for headings and important elements
- Apply colored shadows for interactive elements on hover
- Use opacity backgrounds for overlays and glass effects
- Maintain consistency across similar elements
- Use dark backgrounds for content sections

### ❌ DON'T:
- Mix too many different gradients on one page
- Use bright colors for large background areas
- Create low contrast text/background combinations
- Overuse glow effects (reserve for hover states)

---

## Accessibility Notes

All color combinations have been tested for WCAG AA compliance:
- White text on dark backgrounds: ✅ Pass
- Gradient text with sufficient brightness: ✅ Pass
- Interactive elements have clear focus states: ✅ Pass
- Sufficient contrast ratios maintained: ✅ Pass

---

## Quick Reference - Common Patterns

### Card Component
```jsx
<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8">
  {/* Card content */}
</div>
```

### Primary Button
```jsx
<button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/50">
  Button Text
</button>
```

### Section Heading
```jsx
<h2 className="text-3xl font-bold">
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    Section Title
  </span>
</h2>
```

### Icon Container
```jsx
<div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
  <Icon className="text-white text-2xl" />
</div>
```

---

## Color Palette Export

### Tailwind Config Colors
These colors are used throughout the design:

**Blues**: blue-400, blue-500, blue-600
**Cyans**: cyan-400, cyan-500
**Purples**: purple-400, purple-500, purple-600
**Pinks**: pink-400, pink-500
**Greens**: green-400, green-500, green-600
**Teals**: teal-400, teal-500
**Reds**: red-400, red-500
**Oranges**: orange-400, orange-500
**Yellows**: yellow-500
**Grays**: gray-300, gray-400, gray-500, gray-600, gray-700, gray-800, gray-900

---

This color system creates a cohesive, modern, and professional look across the entire Nexus 3D website while maintaining visual hierarchy and accessibility standards.

