/**
 * Reusable Motion Configuration & Animation Tokens
 * Phase 1 & Phase 2 Animation Architecture
 * Optimized for React 19 + motion/react
 */

// Premium editorial cubic-bezier easing curves
export const EDITORIAL_EASE = [0.16, 1, 0.3, 1]
export const GENTLE_EASE = [0.25, 1, 0.5, 1]
export const SNAP_EASE = [0.2, 0.8, 0.2, 1]

// Phase 2: Pointer Parallax Physics
export const POINTER_SPRING = { stiffness: 160, damping: 24, mass: 0.8 }

// Phase 2: Multi-Layer Depth Multipliers
export const LAYER_DEPTH = {
  BG: 0.45,         // Atmospheric glow, background grid
  DECORATIVE: 0.75, // Geometric mandala, schematic conveyor assembly
  BASE: 1.0,        // Web interface container, body cards
  ACCENT: 1.35,     // Floating ticket, RFQ widget, composer action button
}

// Hero Entrance Sequence Variants
export const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const heroEyebrowVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EDITORIAL_EASE },
  },
}

export const heroLineSmallVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EDITORIAL_EASE },
  },
}

export const heroLineLargeVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: EDITORIAL_EASE },
  },
}

export const heroAccentWordVariants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EDITORIAL_EASE },
  },
}

export const heroDescVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EDITORIAL_EASE },
  },
}

export const heroCtaGroupVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EDITORIAL_EASE,
      staggerChildren: 0.08,
    },
  },
}

export const heroButtonVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EDITORIAL_EASE },
  },
}

export const heroStudioBarVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EDITORIAL_EASE, delay: 0.1 },
  },
}

// Phase 2: Sequential Project Presentation Variants
export const presentationNumberVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EDITORIAL_EASE },
  },
}

export const presentationTitleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.1, ease: EDITORIAL_EASE },
  },
}

export const presentationDescVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.18, ease: EDITORIAL_EASE },
  },
}

export const presentationTechVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EDITORIAL_EASE },
  },
}

export const presentationVisualVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.22,
      ease: EDITORIAL_EASE,
    },
  },
}

export const presentationCtaVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.34, ease: EDITORIAL_EASE },
  },
}

// Reduced Motion Fallbacks
export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'none',
    transition: { duration: 0.2 },
  },
}
