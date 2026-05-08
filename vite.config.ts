import { defineConfig } from "vite";
import tanStackRouter from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanStackRouter(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
