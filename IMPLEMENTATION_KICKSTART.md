# IMPLEMENTATION KICKSTART
## Jack The Fix - Emergency Plumber Landing Page

**Project Status:** Ready for Implementation  
**Date Created:** February 3, 2026  
**Target:** Premium, minimal, responsive plumbing services landing page with glassmorphism effects

---

## 1. DESIGN SYSTEM & COLOR TOKENS

### Color Palette
- **Primary Brand:** Navy Blue (`#0f172a` / `slate-950`)
- **Accent Color:** Warning Orange (`#ea580c` / `orange-600`)
- **Neutrals:** 
  - Off-white/Background: `#f8f7f4`
  - Text Primary (Dark): `#1a1a1a`
  - Text Secondary (Gray): `#6b7280`
  - Border/Divider: `#e5e7eb`

### Design Tokens (CSS Variables)
```css
--primary: #0f172a (Navy)
--accent: #ea580c (Orange)
--background: #f8f7f4 (Off-white)
--text-primary: #1a1a1a (Dark)
--text-secondary: #6b7280 (Gray)
--border: #e5e7eb (Light Gray)
--glass-bg: rgba(248, 247, 244, 0.7)
--glass-border: rgba(255, 255, 255, 0.18)
--radius: 0.5rem (8px)
```

### Glassmorphism Effect Specifications
- **Background:** `rgba(248, 247, 244, 0.7)` with 70% opacity
- **Backdrop Filter:** `blur(10px)`
- **Border:** `1px solid rgba(255, 255, 255, 0.18)`
- **Box Shadow:** `0 8px 32px rgba(15, 23, 42, 0.1)`
- **Applied to:** Service cards, testimonial cards, trust badges

---

## 2. TYPOGRAPHY

### Font Family
- **Primary Font:** GEIST (from Next.js default)
- **Implementation:** Add `font-sans` class to body and apply consistently
- **Fallback:** System fonts via Tailwind's default stack

### Typography Hierarchy
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title (H1) | 3.5rem / 56px | 700 (bold) | 1.2 |
| Section Heading (H2) | 2.25rem / 36px | 600 (semibold) | 1.3 |
| Card Heading (H3) | 1.25rem / 20px | 600 (semibold) | 1.4 |
| Body Text | 1rem / 16px | 400 (normal) | 1.6 |
| Small Text | 0.875rem / 14px | 400 (normal) | 1.5 |

---

## 3. RESPONSIVE BREAKPOINTS

```
Mobile-First Approach:
- Mobile: 0px - 767px (default styles)
- Tablet: 768px - 1023px (md: prefix)
- Desktop: 1024px+ (lg: prefix)

Key Layout Changes:
- Mobile: Single column, full-width, burger menu navigation
- Tablet: 2-column layouts where applicable
- Desktop: Multi-column layouts, full sticky header
```

### Responsive Behavior
- **Hero Section:** 
  - Mobile: Full-height, centered text, large headline
  - Tablet/Desktop: Larger headline, full-width single-column layout
- **Service Cards:** 
  - Mobile: Stack vertically (1 column)
  - Tablet: 2 columns
  - Desktop: 3 columns with hover effects
- **Testimonials:** 
  - Mobile: Single visible card (carousel or stack)
  - Tablet/Desktop: 3 cards displayed side-by-side
- **Sticky Bottom Bar:** 
  - Mobile: Full-width sticky button bar
  - Tablet/Desktop: Remains as part of layout (not sticky)

---

## 4. COMPONENT ARCHITECTURE

### File Structure
```
app/
├── layout.tsx (Root layout with fonts and metadata)
├── page.tsx (Main landing page container)
├── globals.css (Design tokens and theme)
components/
├── Header.tsx (Navigation, logo, phone number)
├── HeroSection.tsx (Hero with headline and CTA)
├── QuickStats.tsx (Live stats bar)
├── ServicesSection.tsx (Service cards with glassmorphism)
├── TrustBadges.tsx (Licensed, Bonded, Insured badges)
├── PromoCard.tsx (Special offer with dashed border)
├── ServiceAreasSection.tsx (List of service areas)
├── TestimonialsSection.tsx (Customer testimonials - 3 cards)
├── FAQSection.tsx (Collapsible accordion)
├── CTAModal.tsx (Contract form modal - triggered by CTA)
├── StickyBottomBar.tsx (Mobile-only sticky CTA bar)
├── BackToTop.tsx (Scroll-to-top button)
└── Footer.tsx (Footer with basic info)
```

### Component Constraints
- **Max Line Length:** 400-600 lines per component file
- **Separation:** Each major section gets its own component
- **Reusability:** Common elements (buttons, cards) should be extracted into utility components
- **Props:** Keep props minimal and well-documented

---

## 5. PAGE STRUCTURE & SECTIONS

### Section Layout Flow
1. **Header** - Logo, navigation (burger menu on mobile), phone number
2. **Hero Section** - Main headline "Stop The Leak", subheading, primary CTA (CTA #1)
3. **Quick Stats Bar** - Live metrics (24/7 Service, 2-Hour Response, 500+ Reviews)
4. **Services Section** - 3-4 service cards with glassmorphism:
   - Emergency Leak Repair
   - Pipe Installation & Maintenance
   - Drain Cleaning & Clearing
   - Water Heater Services
5. **Trust Badges** - Licensed, Bonded, Insured (inline or side-by-side)
6. **Special Offer Card** - Dashed border promo with "JACK50" code and CTA (CTA #2)
7. **Service Areas Section** - List of service areas (expandable/collapsible on mobile)
8. **Testimonials Section** - 3 customer testimonial cards with glassmorphism
9. **FAQ Section** - Collapsible accordion with common questions
10. **CTA Section** - Final call-to-action before footer (CTA #3)
11. **Footer** - Copyright, basic links, sticky phone number
12. **Sticky Bottom Bar** - Mobile-only persistent CTA button

---

## 6. CALL-TO-ACTION (CTA) STRATEGY

### CTA Specifications
- **Single CTA Label:** "CALL JACK NOW" (or "Schedule Now")
- **Action:** Opens modal contract form (not a real phone call)
- **Styling:** 
  - Background: Orange accent (`#ea580c`)
  - Text: White/light color with high contrast
  - Hover: Slight opacity change (0.9) + subtle shadow
  - Active: Scale down 2-3% for tactile feedback
- **Placement (Minimum 3 instances):**
  1. Hero section (primary, full-width or wide button)
  2. Special offer card (prominent position)
  3. Footer or final CTA section
  4. (Optional) Sticky bottom bar on mobile

### Modal Form Specifications
- **Trigger:** Click any CTA button
- **Content:** Simple contract form with fields:
  - Name
  - Phone Number
  - Email
  - Service Type (dropdown)
  - Message/Description
  - Submit Button
- **Animation:** Smooth fade-in/slide-up on open, fade-out on close
- **Backdrop:** Semi-transparent dark overlay

---

## 7. ANIMATION & MICRO-INTERACTIONS

### Animation Guidelines
- **Principle:** Minimal, premium feel - avoid heavy motion
- **Duration:** 200-400ms for transitions, 500-800ms for scroll effects
- **Timing Function:** `ease-in-out` for most animations

### Specific Animations
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| CTA Buttons | Scale + opacity on hover | Hover | 300ms |
| Service Cards | Lift effect (shadow) on hover | Hover | 300ms |
| Glassmorphism Cards | Subtle brightness increase | Hover | 300ms |
| Section Headers | Fade-in + slide-up | Scroll into view | 600ms |
| Numbers in Stats | Count-up animation | Scroll into view | 800ms |
| Modal Entrance | Fade + scale | Open | 300ms |
| Scroll-to-Top Button | Fade in/out | Scroll position | 200ms |
| Accordion Items | Height + opacity | Toggle | 300ms |

### Hover Effects
- **Buttons:** Slight shadow increase, background opacity decrease
- **Cards:** Lift effect (increased shadow, slight translateY -2px)
- **Links:** Color transition to accent orange
- **Icons:** Subtle color change or rotation effect

---

## 8. IMAGERY & PLACEHOLDER ASSETS

### Image Requirements
| Location | Type | Dimensions | Purpose |
|----------|------|-----------|---------|
| Hero Section | Placeholder image (right side or full-width) | 600x400px+ | Professional plumbing/water imagery |
| Service Cards | Icon or small image | 80x80px | Service category visual |
| Testimonials | Placeholder avatar (optional) | 48x48px | Customer profile image |
| Special Offer | Background pattern | Full card | Visual interest for promo |
| Trust Badges | Icon | 32x32px | Certification visual |

**Current Status:** Use placeholder images from [unsplash.com](https://unsplash.com) or similar  
**Future:** Replace with actual brand/service photography

---

## 9. INTERACTIVE BEHAVIORS

### Modal Contract Form
- Opens when any CTA button is clicked
- Smooth overlay and form entrance
- Close button (X) and outside-click to dismiss
- Form validation (email, phone format)
- Submit button (no actual backend, just confirmation message for now)

### Accordion (FAQ Section)
- One item can be expanded at a time (optional)
- Smooth height animation on toggle
- Chevron icon rotation indicator

### Sticky Bottom Bar (Mobile Only)
- Appears permanently on mobile viewport
- Sticky position fixed to bottom
- Contains single CTA button spanning full width
- Visible on scroll

### Scroll-to-Top Button
- Appears when user scrolls past hero section
- Click returns to top with smooth scroll
- Fade in/out based on scroll position

### Smooth Scrolling
- Page-wide smooth scroll behavior
- Navigation links scroll to sections smoothly

---

## 10. SEO & METADATA

### Meta Tags
- **Title:** "Emergency Plumber Services - Jack The Fix | 24/7 Available"
- **Description:** "Professional emergency plumbing services. Licensed, bonded, insured. 2-hour response time. Call now for fast repairs."
- **Keywords:** Emergency plumber, plumbing services, leak repair, 24/7 service
- **OG Image:** Hero section image or custom social share image
- **Canonical:** Self-referencing canonical tag

### Structured Data
- Schema.org LocalBusiness markup
- Phone number, address, hours (even if placeholder)
- Service descriptions

### Open Graph Tags
- og:title, og:description, og:image
- og:type: website
- og:url: page URL

---

## 11. TECHNICAL STACK

### Framework & Libraries
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Typography:** Geist font (Next.js default)
- **Icons:** Lucide React (arrow, menu, phone, etc.)
- **Animations:** CSS transitions + Tailwind utilities (no heavy animation libraries)
- **State Management:** React hooks (useState for modal, accordion)
- **Component Library:** shadcn/ui (use existing components for buttons, cards, etc.)

### Key Files to Create/Modify
1. `/app/layout.tsx` - Add Geist font, update metadata
2. `/app/globals.css` - Add design tokens, glassmorphism utilities
3. `/app/page.tsx` - Main landing page container (import all sections)
4. `/components/Header.tsx` - Navigation with burger menu
5. `/components/HeroSection.tsx` - Hero with CTA
6. `/components/QuickStats.tsx` - Stats bar
7. `/components/ServicesSection.tsx` - Service cards
8. `/components/TrustBadges.tsx` - Trust badges
9. `/components/PromoCard.tsx` - Special offer card
10. `/components/ServiceAreasSection.tsx` - Service areas list
11. `/components/TestimonialsSection.tsx` - Testimonials (3 cards)
12. `/components/FAQSection.tsx` - Accordion FAQ
13. `/components/CTAModal.tsx` - Modal form
14. `/components/StickyBottomBar.tsx` - Mobile sticky bar
15. `/components/BackToTop.tsx` - Scroll-to-top button
16. `/components/Footer.tsx` - Footer

---

## 12. IMPLEMENTATION PHASES

### Phase 1: Foundation (Days 1-2)
- [ ] Update `app/layout.tsx` with Geist font and SEO metadata
- [ ] Update `app/globals.css` with design tokens and glassmorphism utilities
- [ ] Create basic `app/page.tsx` structure
- [ ] Create Header component with mobile burger menu
- [ ] Create utility components (Button variants, Card with glass effect)

### Phase 2: Hero & Core Sections (Days 3-4)
- [ ] Create HeroSection component
- [ ] Create QuickStats bar
- [ ] Create ServicesSection with 3-4 glassmorphism cards
- [ ] Create TrustBadges component
- [ ] Create PromoCard with special offer

### Phase 3: Content Sections (Days 5-6)
- [ ] Create ServiceAreasSection
- [ ] Create TestimonialsSection (3 cards)
- [ ] Create FAQSection with accordion
- [ ] Create Footer component

### Phase 4: Interactive Elements (Day 7)
- [ ] Create CTAModal component
- [ ] Integrate modal into all CTA buttons
- [ ] Create StickyBottomBar (mobile-only)
- [ ] Create BackToTop component
- [ ] Add smooth scroll behavior

### Phase 5: Polish & Responsive (Day 8)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Add hover effects and animations
- [ ] Optimize images and placeholders
- [ ] Fine-tune spacing and typography
- [ ] Performance optimization (lazy loading, etc.)
- [ ] Final testing and bug fixes

---

## 13. RESPONSIVE TESTING CHECKLIST

- [ ] Mobile (375px, 414px, 768px)
- [ ] Tablet (768px, 810px, 1024px)
- [ ] Desktop (1280px, 1440px, 1920px)
- [ ] Header/Navigation (burger menu appears on mobile)
- [ ] Service cards stack correctly on mobile
- [ ] Testimonials carousel/stack on mobile
- [ ] Sticky bottom bar visible only on mobile
- [ ] CTA buttons remain accessible and clickable
- [ ] Images scale and load properly
- [ ] Text remains readable at all breakpoints
- [ ] No horizontal scrolling on mobile

---

## 14. ACCESSIBILITY & QUALITY ASSURANCE

### Quality Checks
- [ ] All buttons have proper `aria-label` attributes
- [ ] Form inputs have associated labels
- [ ] Modal has proper focus management and can be closed with Escape key
- [ ] Color contrast meets minimum accessibility standards (orange on white, navy on light)
- [ ] All interactive elements are keyboard-navigable
- [ ] Icons have alt text or aria-hidden if decorative
- [ ] Page loads without console errors

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No IE11 support required

---

## 15. KNOWN CONSTRAINTS & DECISIONS

| Item | Decision | Reason |
|------|----------|--------|
| CTA Action | Modal form only | No backend integration required per user spec |
| Phone Call | Opens modal, not actual tel: link | User prefers modal over real phone calls |
| Images | Placeholder only | Will replace with actual assets later |
| Backend | None | Static landing page, no data persistence |
| Email Capture | None | Single CTA focus only |
| Video | None | Image-only approach |
| Analytics | None | Requested not to track |
| Avatars | No custom avatars in testimonials | Using placeholder text/names only |

---

## 16. NEXT STEPS

1. **Approval:** Review this plan and provide feedback
2. **Color Confirmation:** Confirm navy + orange color scheme
3. **Content Review:** Provide final copy for all sections
4. **Asset Confirmation:** Confirm placeholder image sources
5. **Implementation:** Begin Phase 1 with foundation setup

---

## DESIGN BRIEF SUMMARY

**Aesthetic:** Premium, minimal, professional emergency services  
**Color Scheme:** Navy blue + orange accent with off-white backgrounds  
**Typography:** Single font (Geist) for consistency  
**Visual Style:** Glassmorphism cards, subtle animations, hover effects  
**Layout:** Full-width single-page, mobile-first responsive design  
**Interactivity:** Modal CTA, smooth scrolling, micro-animations  
**Tone:** Professional, urgent, trustworthy, premium service quality  

---

**Status: READY FOR IMPLEMENTATION** ✓
