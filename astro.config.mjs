import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://daniel-fernandes-dev.web.app",
  outDir: "./out",
  vite: { plugins: [tailwindcss()] },
})
