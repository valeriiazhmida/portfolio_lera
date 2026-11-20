import { defineConfig } from "vite";

// На GitHub Pages сайт живе в підпапці /portfolio_lera/, на Vercel і локально — в корені.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/portfolio_lera/" : "/",
});
