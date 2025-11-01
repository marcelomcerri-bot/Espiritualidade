# Design Guidelines: Plataforma de Cuidado Espiritual na Saúde Mental

## Design Approach

**Hybrid Wellness-Academic Approach**: Drawing inspiration from mindfulness applications like Calm and Headspace for their soothing, therapeutic interfaces, while maintaining academic credibility through structured information architecture. The design balances emotional warmth with professional rigor, creating a safe digital sanctuary for spiritual and mental health exploration.

**Core Design Principles**:
- Therapeutic Presence: Every element should evoke calm and safety
- Gentle Guidance: Progressive disclosure without overwhelming users
- Organic Flow: Natural transitions mirroring spiritual journey
- Evidence-Based Trust: Academic grounding visible but not clinical

---

## Typography

**Font Families** (via Google Fonts):
- **Primary**: 'Lora' (serif) - for headings and important content, conveying warmth and trustworthiness
- **Secondary**: 'Inter' (sans-serif) - for body text and UI elements, ensuring readability
- **Accent**: 'Playfair Display' (serif) - for hero sections and featured quotes

**Typography Scale**:
- Hero Title: text-5xl lg:text-7xl font-serif font-light tracking-wide
- Section Headers: text-3xl lg:text-4xl font-serif font-normal
- Subsections: text-xl lg:text-2xl font-serif font-medium
- Body Text: text-base lg:text-lg font-sans leading-relaxed
- Captions/Labels: text-sm font-sans font-medium tracking-wide uppercase
- Quotes: text-2xl lg:text-3xl font-serif italic leading-relaxed

---

## Layout System

**Spacing Primitives** (Tailwind units):
- Micro spacing: 2, 3, 4 (gaps, padding within components)
- Component spacing: 6, 8, 12 (between elements)
- Section spacing: 16, 20, 24, 32 (vertical rhythm between major sections)

**Container Strategy**:
- Full-width hero: w-full with inner max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl mx-auto px-6 lg:px-8
- Text-heavy areas: max-w-4xl mx-auto for optimal reading
- Interactive tools: max-w-5xl for breathing room

**Responsive Grid**:
- Mobile: grid-cols-1 (all stacked)
- Tablet: grid-cols-2 for features/practices
- Desktop: grid-cols-3 for practice cards, grid-cols-2 for major sections

---

## Component Library

### Navigation
**Header**: Sticky navigation with subtle backdrop blur (backdrop-blur-md bg-white/80), logo left, main nav center, CTA button right. On mobile: hamburger menu with smooth slide-in drawer.

### Hero Section
**Layout**: Full viewport height (min-h-screen) split design - left side with large background image (nature, light filtering through leaves), right side with gradient overlay containing hero text and primary CTA.

**Content**: 
- Large serif headline emphasizing "sentido" and "propósito"
- Subheading explaining the platform's mission in accessible language
- Two CTAs: "Começar Minha Jornada" (primary) and "Explorar Práticas" (secondary)
- Subtle animated floating particles in background

### Feature Cards (for main sections)
**Design**: Rounded-3xl cards with soft shadow (shadow-lg hover:shadow-2xl), p-8, subtle gradient backgrounds in theme palette.

**Structure**:
- Icon area at top (custom illustrations of spiritual symbols - mandala, lotus, light)
- Section title in serif font
- Brief description in sans-serif
- "Explorar" link with arrow

**Grid**: 3 columns desktop (Descobrir Meu Propósito, Meu Diário, Práticas in row 1; Minha Jornada, Momento Difícil, Meu Mapa in row 2)

### Interactive Tool Containers
**Questionário/Diário Interface**:
- Clean white cards with generous padding (p-8 lg:p-12)
- Progress indicator at top using soft gradient bar
- Question/prompt in large serif text
- Input areas with subtle borders that glow on focus
- Navigation buttons at bottom with clear visual hierarchy

### Multimedia Sections (Práticas, Aprenda Mais)
**Video Embeds**: 
- 16:9 aspect ratio containers with rounded corners (rounded-2xl)
- Thumbnail with play overlay before load
- Title and brief description below each video
- Reference citation in small text

**Audio Players**:
- Custom styled HTML5 audio with waveform visualization
- Playlist view for meditation/music collections
- Categories: Meditação Guiada, Música Contemplativa, Exercícios de Respiração

### Data Visualization (Minha Jornada)
**Chart Style**: 
- Line graphs with gradient fills below curves
- Soft rounded corners on bars if using bar charts
- Pastel theme colors for data series
- Tooltips with frosted glass effect
- Weekly/monthly toggle view

### Emergency Support (Momento Difícil)
**Crisis Interface**:
- Immediate access - large, clear buttons
- Breathing exercise timer with animated circle
- Quick-access hopeful phrases carousel
- Emergency contacts prominently displayed
- Soft, non-alarming visual treatment

### Reference Library
**Academic Section**:
- Clean table layout with alternating row backgrounds
- Search/filter by author, year, type
- ABNT formatted citations with copy button
- Accordion sections for PDF references, articles, multimedia
- Download option for complete bibliography

---

## Animations & Interactions

**Page Transitions**: 
- Fade-in on scroll for section reveals (duration-700 ease-out)
- Stagger children animations for card grids (delay-[100ms], delay-[200ms], etc.)

**Micro-interactions**:
- Buttons: Subtle scale on hover (hover:scale-105), smooth transition-all duration-300
- Cards: Gentle lift (hover:-translate-y-2), shadow deepening
- Form inputs: Border glow with theme color on focus
- Icons: Gentle rotation or float on hover

**Ambient Animations**:
- Floating particles in hero (slow drift, fade in/out)
- Subtle parallax on scroll for background elements
- Breathing circle animation in Momento Difícil (expand/contract, 4-7-8 rhythm)
- Gradient shifts in backgrounds (very subtle, long duration)

**Constraint**: All animations remain subtle and calming - no jarring movements or rapid transitions

---

## Images

**Hero Image**: 
- Large background image showing serene nature scene - soft morning light filtering through trees into a peaceful clearing, or gentle water reflection with lily pads
- Treatment: Slight blur on left edge where text overlay appears, warm filter applied
- Position: Right 60% of viewport on desktop, background on mobile

**Section Backgrounds**:
- Práticas: Abstract watercolor texture in lavender/teal
- Aprenda Mais: Subtle botanical line drawings as decorative elements
- Meu Mapa de Sentido: Soft mandala pattern as watermark

**Illustrative Icons**:
- Custom line-art style icons for each major section
- Organic, flowing shapes (no harsh geometric)
- Single-color or subtle two-tone gradients

**Photography Style**: 
- Natural, soft-focused images of nature, meditation, human connection
- Warm color grading, never cold or clinical
- Diverse representation in any people imagery
- Use as accents, not dominating the interface

---

## Accessibility Foundations

**Consistent Implementation**:
- All interactive elements have clear focus states (ring-2 ring-offset-2)
- Minimum contrast ratio 4.5:1 for all text
- Form labels always visible and associated
- ARIA labels for all icon-only buttons
- Keyboard navigation fully supported throughout
- Screen reader friendly headings hierarchy (h1 > h2 > h3)

---

## Special Sections

### Landing/Home Page Structure:
1. Hero (full viewport)
2. Mission Statement (centered, max-w-3xl, py-20)
3. Main Features Grid (6 cards as described)
4. Evidence Section (statistics, professor quotes, academic backing - 2 column)
5. How It Works (3-step process with illustrations)
6. Multimedia Preview (featured video/practice sample)
7. CTA Section (gradient background, centered content)
8. Footer (References link, About, Contact, Social Proof badges)

### Footer Enhancement:
- 4-column layout: About/Mission, Quick Links, Academic Partners, Contact
- Newsletter signup: "Receba insights sobre espiritualidade e saúde mental"
- Academic badges: UFF logo, CNPq mention if applicable
- Social media icons with custom styling
- Copyright and acknowledgments to course/professor

---

## Content Strategy Notes

**Tone**: Compassionate yet professional, accessible but evidence-based
**Language**: Portuguese (BR), avoiding jargon while maintaining scientific accuracy
**Paraphrasing**: All source content completely rewritten in unique voice
**Citations**: Inline references to build credibility, full bibliography in dedicated section