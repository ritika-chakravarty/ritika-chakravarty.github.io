import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'docs',       // <-- write build files here instead of "dist"
    emptyOutDir: true,
  },
})