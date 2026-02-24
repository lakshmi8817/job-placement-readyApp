# Job Notification App - Design System Documentation

## Overview
This design system provides a cohesive, professional foundation for the Job Notification App. It follows a calm, intentional philosophy with a focus on clarity and usability. The design avoids flashy elements and focuses on a clean, professional aesthetic suitable for a serious B2C product.

## Design Philosophy
- Calm, intentional, coherent, confident
- Not flashy, not playful, not hackathon-style
- No gradients, glassmorphism, neon colors, or animation noise
- Professional and focused on usability

## Color System
- **Background**: `#F7F6F3` (off-white, not pure white)
- **Primary text**: `#111111`
- **Accent**: `#8B0000` (deep red)
- **Success**: `#2E7D32` (muted green)
- **Warning**: `#FF8F00` (muted amber)
- Maximum 4 colors across entire UI

## Typography
- **Headings**: Serif font (Georgia), large, confident, generous spacing
- **Body**: Clean sans-serif, 16–18px
- **Line-height**: 1.6–1.8
- **Max width for text blocks**: 720px
- No decorative fonts or random sizes

## Spacing System
Only use these values:
- 8px (xs)
- 16px (sm)
- 24px (md)
- 40px (lg)
- 64px (xl)

Never use random spacing values like 13px or 27px. Whitespace must feel intentional.

## Global Layout Structure
Every page must follow:
```
[Top Bar] → [Context Header] → [Primary Workspace (70%)] + [Secondary Panel (30%)] → [Proof Footer]
```

### Top Bar
- Left: App name (Job Notification App)
- Center: Progress indicator (Step X / Y)
- Right: Status badge (Not Started / In Progress / Shipped)

### Context Header
- Large serif headline
- One-line subtext
- Clear purpose
- No hype language

### Primary Workspace
- Clean cards
- Predictable components
- No crowding
- Subtle borders
- No heavy shadows

### Secondary Panel
- Step explanation
- Copyable prompt box
- Buttons styled consistently

### Proof Footer
Checklist style:
- □ UI Built
- □ Logic Working
- □ Test Passed
- □ Deployed

## Component Specifications

### Buttons
- **Primary button**: Solid deep red (#8B0000)
- **Secondary button**: Outlined
- Same border radius everywhere
- Consistent sizing and spacing

### Inputs
- Clean borders
- Clear focus state
- Consistent padding and sizing

### Cards
- Subtle border
- No drop shadows
- Consistent padding
- Clear hierarchy

## Interaction Rules
- Transitions: 150–200ms
- Ease-in-out timing
- No bounce
- No parallax

## Error & Empty States
- Errors must clearly explain what went wrong and how to fix it
- Never blame the user
- Empty states must guide next action
- Never leave blank screens

## CSS Custom Properties
All design tokens are available as CSS custom properties in the `:root` selector:

```css
:root {
  /* Colors */
  --bg-primary: #F7F6F3;
  --text-primary: #111111;
  --accent-primary: #8B0000;
  --success: #2E7D32;
  --warning: #FF8F00;
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 40px;
  --spacing-xl: 64px;
  
  /* Typography */
  --font-heading: "Georgia", "Times New Roman", Times, serif;
  --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, etc;
  
  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
```

## Usage Examples
Refer to the `job-notification-app.html` file for implementation examples of all components and layout structures.