import { createTheme } from "@mui/material/styles";
import {
  breakpoint,
  color,
  radius,
  shadow,
  size,
  spacingUnit,
  typography as type,
} from "./tokens";

/**
 * The MUI theme is a projection of the design tokens — it never introduces a
 * value of its own. Component defaults live here so that feature code stays
 * free of one-off `sx` colours.
 */
const theme = createTheme({
  breakpoints: { values: { ...breakpoint } },
  spacing: spacingUnit,
  shape: { borderRadius: parseInt(radius.sm, 10) },

  palette: {
    mode: "dark",
    primary: {
      main: color.brand.main,
      light: color.brand.light,
      dark: color.brand.dark,
      contrastText: color.brand.contrast,
    },
    secondary: {
      main: color.brand.light,
      light: color.brand.lighter,
      dark: color.brand.main,
      contrastText: color.text.inverse,
    },
    success: { main: color.status.success },
    warning: { main: color.status.warning },
    error: { main: color.status.error },
    info: { main: color.status.info },
    background: {
      default: color.surface.canvas,
      paper: color.surface.raised,
    },
    text: {
      primary: color.text.primary,
      secondary: color.text.secondary,
      disabled: color.text.disabled,
    },
    divider: color.border.subtle,
  },

  typography: {
    fontFamily: type.fontFamily.sans,
    fontWeightRegular: type.weight.regular,
    fontWeightMedium: type.weight.medium,
    fontWeightBold: type.weight.bold,
    h1: { fontSize: type.size["2xl"], fontWeight: type.weight.bold },
    h4: { fontSize: type.size["2xl"], lineHeight: type.lineHeight.snug },
    h5: { fontSize: type.size.xl, lineHeight: type.lineHeight.snug },
    h6: { fontSize: type.size.lg, lineHeight: type.lineHeight.snug },
    body1: { fontSize: type.size.md, lineHeight: type.lineHeight.normal },
    body2: { fontSize: type.size.sm, lineHeight: type.lineHeight.normal },
    subtitle2: { fontSize: type.size.sm, fontWeight: type.weight.medium },
    button: { fontWeight: type.weight.bold, textTransform: "none" },
    /** Repurposed as the countdown display. See `size.display` in tokens. */
    caption: {
      fontSize: type.size.display,
      lineHeight: type.lineHeight.tight,
      [`@media (min-width:${breakpoint.md}px)`]: {
        fontSize: type.size.displayUp,
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: type.fontFamily.sans,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        code: { fontFamily: type.fontFamily.mono },
        "input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button":
          { WebkitAppearance: "none", margin: 0 },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: radius.sm },
        containedPrimary: {
          backgroundColor: color.brand.main,
          color: color.brand.contrast,
          "&:hover": {
            backgroundColor: color.brand.light,
            color: color.text.inverse,
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: color.text.primary,
          "&:hover": { backgroundColor: color.surface.overlay },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: color.text.secondary,
          "&.Mui-focused": { color: color.text.primary },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: { color: color.text.primary },
      },
    },

    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": { borderBottom: `1px solid ${color.border.default}` },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: `1px solid ${color.border.strong}`,
          },
          "&:after": { borderBottom: `2px solid ${color.brand.light}` },
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          color: color.border.strong,
          "&.Mui-checked": { color: color.brand.light },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: { fontSize: size.icon.md },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: color.surface.overlay,
          borderRadius: radius.sm,
          boxShadow: shadow.md,
        },
      },
    },
  },
});

export default theme;
