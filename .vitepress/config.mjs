import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "En Gedi House",
  description: "In Scripture, En Gedi was a place where David found refuge and where life sprang forth even in dry land. Here, we seek to create that same sanctuary — a place of renewal, prayer, and community, where hearts can rest and souls can be refreshed in the presence of God.",
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
