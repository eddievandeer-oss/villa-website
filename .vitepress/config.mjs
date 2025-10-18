import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Villa Casablanca",
  description: "Luxury accommodation in Niagara wine country",
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5173
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rooms & Pricing', link: '/rooms' },
    ],
  }
})
