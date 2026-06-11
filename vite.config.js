import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const repoName = "business-website";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGitHubPages ? `/${repoName}/` : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        services: resolve(__dirname, "services/index.html"),
        portfolio: resolve(__dirname, "portfolio/index.html"),
        contact: resolve(__dirname, "contact/index.html")
      }
    }
  }
});