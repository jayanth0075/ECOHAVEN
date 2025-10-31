# Landing Page - Design Specifications

## 🎨 Color Palette

### Primary Colors
- **Eco Green**: `#10b981` - Main action color
- **Dark Green**: `#059669` - Hover/Active states
- **Forest Green**: `#047857` - Backgrounds

### Secondary Colors
- **Deep Purple**: `#8b5cf6` - Accent color
- **Blue Accent**: `#3b82f6` - Additional accent
- **Pink Accent**: `#ec4899` - Complementary color

### Neutral Colors
- **Dark Background**: `#0f172a` - Hero section base
- **Slate Dark**: `#1e293b` - Darker areas
- **White**: `#ffffff` - Text/Accents

## 📐 Card Specifications

### Hero Visual Cards

#### Main Card (Center)
- **Dimensions**: 300px width × auto height
- **Position**: Center (translate(-50%, -50%) scale(1.05))
- **Background**: Linear gradient green theme
- **Border**: 2px solid rgba(16, 185, 129, 0.3)
- **Padding**: 30px
- **Border Radius**: 20px
- **Backdrop Filter**: blur(20px)
- **Shadow**: 0 20px 60px rgba(0, 0, 0, 0.3)
- **Hover**: Scale 1.05+, enhanced glow

#### Secondary Card (Top-Right)
- **Dimensions**: 260px width
- **Position**: top: 5%, right: 15%
- **Background**: Linear gradient blue/purple theme
- **Animation**: Floating animation (6s, infinite)
- **Z-Index**: 2

#### Tertiary Card (Bottom-Left)
- **Dimensions**: 260px width
- **Position**: bottom: 8%, left: 15%
- **Background**: Linear gradient pink/purple theme
- **Animation**: Floating animation (5.5s, infinite, reversed)
- **Z-Index**: 2

### Card Content
- **Title**: 1.4rem, font-weight 800, white
- **Description**: 0.95rem, rgba(255, 255, 255, 0.85)
- **Icon**: 3.5rem emoji with drop-shadow
- **Spacing**: 15px gap between elements

## 🎭 Typography

### Headings
- **Hero Title**: 3.5rem, weight 900, line-height 1.2
- **Section Title**: 2.8rem, weight 800
- **Card Title**: 1.4rem, weight 800
- **Feature Title**: 1.6rem, weight 700

### Body Text
- **Large**: 1.2rem, weight 400
- **Regular**: 1rem, weight 400
- **Small**: 0.95rem, weight 400

## 🎬 Animations

### Floating Emojis
```
emoji-1 (🌿): y: ±30, x: ±20, rotate: 0-10-0 (8s)
emoji-2 (🌳): y: ±20, x: ±20, rotate: 0-(-10)-0 (10s, delay 1s)
emoji-3 (🌞): y: ±20, scale: 1-1.1-1 (9s, delay 2s)
```

### Floating Cards
```
Secondary: translateY(-20px) over 6s, infinite
Tertiary: translateY(-20px) over 5.5s, infinite (reversed)
```

### Gradient Orbs
```
Orb-1: translate(50px, -50px) scale(1.1) over 15s
Orb-2: translate(-50px, 50px) scale(0.95) over 17s (delay 2s)
Orb-3: translate(40px, -40px) scale(1.05) over 19s (delay 4s)
```

### Hover Effects
- **Cards**: Scale 1.1, enhanced shadow
- **Feature Icons**: Scale 1.1, background enhancement
- **Step Numbers**: Scale 1.15, glowing shadow
- **Buttons**: Translate(-4px), shadow enhancement

## 📱 Responsive Breakpoints

### Desktop (≥1024px)
- Hero visual side: 500px height
- Main card: 300px (scale 1.05)
- Secondary/Tertiary: 260px
- Full gradient orbs and animations

### Tablet (768px - 1023px)
- Hero visual side: 300px height
- Main card: 220px (scale 0.95)
- Secondary/Tertiary: 180px
- Scaled icons and text

### Mobile (≤480px)
- Hero visual side: 280px height
- Main card: 180px (scale 0.85)
- Secondary/Tertiary: 140px
- Optimized card positioning
- Simplified animations

## 🌊 Background Elements

### Hero Background
- **Base Gradient**: 135deg from #0f172a through #1a2a4a
- **Overlay Glow**: Inset box-shadow with eco-green tint
- **Grid Pattern**: Subtle green grid (50px × 50px)
- **Particles**: 6 floating particles with pulse animation

### Orb Effects
- **Blur**: 100px for smooth gradient
- **Opacity**: Varies from 0.2 to 0.4 depending on layer
- **Colors**: Green, purple, pink gradient combinations
- **Animation**: Continuous smooth floating motion

## ✨ Special Effects

### Drop Shadows
- **Emojis**: 0 4px 15px rgba(16, 185, 129, 0.3)
- **Cards**: 0 20px 60px rgba(0, 0, 0, 0.3)
- **Icons**: 0 8px 16px rgba(16, 185, 129, 0.15)

### Glow Effects
- **Buttons**: Box-shadow with color-specific gradients
- **Step Numbers**: 0 12px 30px rgba(16, 185, 129, 0.4)
- **Cards**: Enhanced on hover with color-specific glow

### Text Effects
- **Gradient Text**: Linear gradient from green (#10b981) to cyan (#0891b2)
- **Text Shadow**: Subtle shadows on important elements
- **Letter Spacing**: -0.5px to 1px for better readability

## 🎯 Design Principles Applied

1. **Clarity**: Fixed numbers and clear hierarchy
2. **Depth**: Layered cards with z-index management
3. **Motion**: Purposeful animations that enhance experience
4. **Accessibility**: Good color contrast and readable fonts
5. **Responsiveness**: Adapts beautifully across all devices
6. **Modern**: Contemporary gradient and glass-morphism effects
7. **Professional**: Clean lines and polished appearance
