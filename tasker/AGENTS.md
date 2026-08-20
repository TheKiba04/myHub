# AGENTS.md — Luka Project Guide

Ukrainian Orthodox Church (Church of Apostle and Evangelist Luke) website with a public-facing UI and a Firebase-backed admin panel.

## Tech Stack
- **React 19** + **TypeScript** (strict mode) + **Vite 8** — package manager is **yarn**
- **React Router 7** for routing, **Firebase 11** for backend/auth/deploy
- **CSS Modules** + **SCSS** for styling (no Tailwind, no styled-components)

## Developer Workflows
```bash
yarn dev          # dev server on http://localhost:3000
yarn build        # tsc -b && vite build → output to ./build/
yarn lint         # eslint . (eslint + prettier enforced)
yarn deploy       # build + firebase deploy (requires $VITE_FIREBASE_PROJECT_ID env var)
```
No test runner is configured yet.

## Path Aliases
`@*` maps to `src/*` (configured in `tsconfig.app.json` + `vite-tsconfig-paths`).
Always use aliases, but if the file exist in the same directory use relative `../` paths for cross-directory imports.
```ts
import cx from '@utils/cx'
import { ROUTES } from '@constants/navigation'
import Button from '@components/Button'
```

## Routing & Layout Architecture
Routes are nested in `src/App` using three layout wrappers:
- `GeneralLayout` — public pages (`/`, `/schedule`, `/contact-us`)
- `ProtectedContentLayout` — guards admin routes; redirects to `/admin/login` if `isAuthenticated` is false
- `AdminPanelLayout` — wraps admin pages inside the side-nav shell

All routes are defined as constants in `src/constants/navigation`. Add new routes there and reference via `ROUTES.*`.

## Component Conventions
Each component lives in its own folder under `src/components/` with four files (in future we may add a .test.tsx file for unit tests):
```
ComponentName/
  ComponentName.tsx       # component
  ComponentName.module.css # scoped styles
  ComponentName.type.ts   # prop interfaces (if non-trivial)
  index.ts                # exports
```
Variant/size logic uses a `variantMap`/`sizeMap` object lookup pattern (see `Button.tsx`). Class composition is done via the custom `cx` utility (`src/utils/cx`) — do not install `clsx` or `classnames`.

## Icon System
Icons are PNG files in `public/icons/`. The canonical registry is `src/constants/icons`:
- `ICONS` — map of `{ SRC, ALT }` objects
- `ICON` — key-only enum (`ICON.CALENDAR === 'CALENDAR'`) for type-safe name references
- `IconName` — union type of all icon keys

When adding a new icon, add the file to `public/icons/`, then add its entry to `ICONS`.

## Responsive Design
Use the `useBreakpoint` hook (`src/hooks/useBreakpoint`) for JS-driven responsive logic. Breakpoints are defined in `src/constants/breakpoints`. The hook exposes `isMobile`, `isTablet`, `isDesktop`, `isDesktopLarge`, and convenience groups like `displayOnSmallScreens`.

## Styling System
CSS custom properties are defined in `src/styles/palette.css` (colors) and `src/styles/variables.css`. Global resets/typography are in `src/styles/global.css`. Fonts are served from `public/fonts/` and declared in `src/styles/fonts.css`.

## Firebase & Environment
Firebase config lives in `src/firebase.config.ts`. The deploy target project is controlled by `$VITE_FIREBASE_PROJECT_ID`. Hosting config is in `firebase.json`. Authentication guard in `App.tsx` uses a hardcoded `isAuthenticated = true` — real auth integration is pending.

