import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import favicons from "@peterek/vite-plugin-favicons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), [favicons("src/assets/icon.svg")]],
});
