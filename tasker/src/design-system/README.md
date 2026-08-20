# myHub Design System

One source of truth for colour, spacing, type, motion and shape. Feature code
should never contain a raw hex value, a magic pixel number, or a duration.

```
src/design-system/
├── tokens.ts     primitives, consumed from TS/`sx`
├── tokens.css    the same primitives as `--ds-*` CSS custom properties
├── theme.ts      MUI theme — a projection of the tokens, plus component defaults
└── index.ts      public entry point
```

## Using it

**In TSX / `sx`** — prefer semantic theme keys, fall back to tokens for values
the theme does not model (sizes, custom shadows):

```tsx
import { size, space, color } from "../../design-system";

<Box sx={{ bgcolor: "background.paper", color: "text.secondary", gap: space[2] }} />
<Icon sx={{ width: size.icon.xl }} />
```

**In plain CSS** — use the custom properties (`tokens.css` is imported once from
`src/index.css`, so the variables are available everywhere):

```css
.Panel {
  background-color: var(--ds-color-surface-raised);
  border-radius: var(--ds-radius-md);
  padding: var(--ds-space-2);
}
```

## Tokens

| Group | Scale |
| --- | --- |
| `color.brand` | `lighter` `light` `main` `dark` `darker` `contrast` |
| `color.surface` | `sunken` `canvas` `raised` `overlay` — elevation ladder |
| `color.text` | `primary` `secondary` `muted` `disabled` `inverse` |
| `color.border` | `subtle` `default` `strong` |
| `color.status` | `success` `warning` `error` `info` |
| `space` | 8px grid: `0 · 0.5 · 1 · 1.5 · 2 · 3 · 4 · 5 · 6 · 8` |
| `radius` | `none` `sm` `md` `lg` `pill` |
| `shadow` | `sm` `md` `lg` `glow` `focus` |
| `typography` | `fontFamily` `weight` `size` `lineHeight` |
| `duration` / `easing` | `instant` `fast` `normal` `slow` · `standard` `enter` `exit` |
| `size` | `control` `icon` `panel` |
| `breakpoint` / `zIndex` | MUI-aligned breakpoints, named stacking levels |

Motion durations collapse to `0ms` under `prefers-reduced-motion: reduce`.

## Conventions

- **Never hardcode.** Add a token first, then use it. If a value is used twice,
  it is a token.
- **`tokens.ts` and `tokens.css` must stay in sync.** They are the same scale
  expressed twice, for two consumers.
- **Component styling belongs in `theme.ts`.** If every `Button` needs the same
  colour, that is a `styleOverrides` entry, not an `sx` prop repeated in ten
  files.
- **`em` is deliberate for the countdown.** `typography.size.display` scales
  with the fluid `--ds-canvas-font-size` on `.App-container`; switching it to
  `rem` would break the responsive readout.
