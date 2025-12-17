import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Dev server config (local only, ignored by Vercel)
  server: {
    port: 3000,
    host: "0.0.0.0",
  },

  // Path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
