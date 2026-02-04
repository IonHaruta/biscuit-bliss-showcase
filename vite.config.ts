import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // IMPORTANT for GitHub Pages (repo name)
  base: "/biscuit-bliss-showcase/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [
    react(),
    // (optional) if you still want component tagging ONLY in development:
    // mode === "development" && (await import("lovable-tagger")).then(m => m.componentTagger())  // don't do this unless you really need it
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
