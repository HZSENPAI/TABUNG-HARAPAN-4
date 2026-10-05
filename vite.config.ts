import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    base: '/TABUNG-HARAPAN-3/',
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['icon.svg', 'icon-192.png', 'icon-512.png', 'logo.png'],
        manifest: {
          id: '/TABUNG-HARAPAN-3/',
          name: 'TABUNG HARAPAN',
          short_name: 'Tabung Harapan',
          description: 'Aplikasi pengurusan simpanan peribadi dan kad kredit bertema Soft Pink & Material 3 dengan pengiraan baki automatik.',
          theme_color: '#fff1f2',
          background_color: '#fff5f7',
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/TABUNG-HARAPAN-3/',
          scope: '/TABUNG-HARAPAN-3/',
          icons: [
            {
              src: '/TABUNG-HARAPAN-3/icon-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: '/TABUNG-HARAPAN-3/icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
