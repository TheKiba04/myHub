/**
 * Design tokens — the single source of truth for every visual decision.
 *
 * Nothing in the app should hardcode a colour, spacing, radius or duration.
 * Use these tokens directly in TS/`sx`, or their CSS custom property mirror
 * (`tokens.css`, prefix `--ds-`) inside plain `.css` files.
 */

/* ------------------------------------------------------------------ colour */

export const color = {
  /** Graphite/slate brand ramp — the app's controls and accents. */
  brand: {
    lighter: "#B7C2CB",
    light: "#919FAA",
    main: "#636C73",
    dark: "#4A5258",
    darker: "#343B40",
    contrast: "#FFFFFF",
  },
  /** Elevation ladder, from the page background up to floating overlays. */
  surface: {
    sunken: "#212429",
    canvas: "#282C34",
    raised: "#2E2F31",
    overlay: "#363B44",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#919FAA",
    muted: "#5A5959",
    disabled: "#5A5959",
    inverse: "#2D2C2C",
  },
  border: {
    subtle: "#3A3F47",
    default: "#4A5258",
    strong: "#636C73",
  },
  status: {
    success: "#66BB6A",
    warning: "#FFA726",
    error: "#F05B5B",
    info: "#64B5F6",
  },
  common: {
    white: "#FFFFFF",
    black: "#000000",
  },
} as const;

/* ----------------------------------------------------------------- spacing */

/** 8px base grid. `space[2]` = 16px. */
export const space = {
  0: "0",
  0.5: "4px",
  1: "8px",
  1.5: "12px",
  2: "16px",
  3: "24px",
  4: "32px",
  5: "40px",
  6: "48px",
  8: "64px",
} as const;

/** MUI's `spacing()` base, so `p={2}` and `space[2]` mean the same thing. */
export const spacingUnit = 8;

/* ------------------------------------------------------------------ radius */

export const radius = {
  none: "0",
  sm: "3px",
  md: "6px",
  lg: "12px",
  pill: "999px",
} as const;

/* ----------------------------------------------------------------- shadows */

export const shadow = {
  none: "none",
  sm: "0 1px 2px rgba(0, 0, 0, 0.32)",
  md: "0 4px 12px rgba(0, 0, 0, 0.40)",
  lg: "0 12px 32px rgba(0, 0, 0, 0.48)",
  /** Light halo used by floating controls on the dark canvas. */
  glow: "0 4px 102px -5px rgba(246, 246, 246, 0.75)",
  focus: `0 0 0 3px ${color.brand.light}66`,
} as const;

/* -------------------------------------------------------------- typography */

export const typography = {
  fontFamily: {
    sans: [
      "-apple-system",
      "BlinkMacSystemFont",
      "'Segoe UI'",
      "'Roboto'",
      "'Oxygen'",
      "'Ubuntu'",
      "'Cantarell'",
      "'Fira Sans'",
      "'Droid Sans'",
      "'Helvetica Neue'",
      "sans-serif",
    ].join(", "),
    mono: [
      "source-code-pro",
      "Menlo",
      "Monaco",
      "Consolas",
      "'Courier New'",
      "monospace",
    ].join(", "),
  },
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "2.125rem",
    /**
     * Countdown readout. Kept in `em` on purpose: it scales with the
     * fluid `font-size: calc(10px + 2vmin)` set on the app canvas.
     */
    display: "7em",
    displayUp: "14em",
  },
  lineHeight: {
    tight: 0.9,
    snug: 1.2,
    normal: 1.5,
  },
} as const;

/* ------------------------------------------------------------------ motion */

export const duration = {
  instant: "80ms",
  fast: "150ms",
  normal: "240ms",
  slow: "400ms",
} as const;

export const easing = {
  standard: "cubic-bezier(0.4, 0, 0.2, 1)",
  enter: "cubic-bezier(0, 0, 0.2, 1)",
  exit: "cubic-bezier(0.4, 0, 1, 1)",
} as const;

/* ------------------------------------------------------------- size / grid */

export const size = {
  control: {
    sm: "32px",
    md: "40px",
    lg: "50px",
  },
  icon: {
    sm: "16px",
    md: "24px",
    lg: "40px",
    xl: "150px",
  },
  panel: {
    /** Fixed height of the side panel content area. */
    contentHeight: "400px",
  },
} as const;

export const breakpoint = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

export const zIndex = {
  base: 0,
  raised: 1,
  overlay: 2,
  modal: 1300,
  toast: 1400,
} as const;

const tokens = {
  color,
  space,
  spacingUnit,
  radius,
  shadow,
  typography,
  duration,
  easing,
  size,
  breakpoint,
  zIndex,
};

export type Tokens = typeof tokens;

export default tokens;
