import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // @mui/icons-material v5 exposes no per-icon ESM entry, so `.../Menu`
      // resolves to CJS, which Vite 8 unwraps to `{ default: Icon }` instead
      // of the icon itself. Point icon subpaths at the package's ESM build.
      {
        find: /^@mui\/icons-material\/(?!esm\/)([A-Za-z0-9]+)$/,
        replacement: "@mui/icons-material/esm/$1",
      },
    ],
  },
  build: {
    // firebase.json hosting serves from `build`
    outDir: "build",
  },
  server: {
    // CRA's default port, overridable via PORT as CRA allowed
    port: Number(process.env.PORT) || 3000,
  },
});
