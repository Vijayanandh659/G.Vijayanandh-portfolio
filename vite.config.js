import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Student Management',
        short_name: 'Student App',
        description: 'Student Management React Application',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/profile-192x192.png.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: '/profile-512x512.png.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}']
      }
    })
  ]
})

  plugins: [react()],
  base: '/G.Vijayanandh-portfolio/'
})

