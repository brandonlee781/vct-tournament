import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vct-tournament/',
  plugins: [
    vue(),
    svgLoader(),
    // https://github.com/antfu/unplugin-icons
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      globs: [
        'src/components/**/*.{vue,tsx,jsx}',
        '!src/components/**/*.stories.{vue,tsx,jsx}',
        'src/**/components/**/*.{vue,tsx,jsx}',
        '!src/**/components/**/*.stories.{vue,tsx,jsx}',
      ],
      dts: true,
      resolvers: [
        IconsResolver(),
      ],
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: true,
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dirs: ['src/composables/**', 'src/**/composables/**', 'src/generated'],
      eslintrc: {
        enabled: true,
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      base: '/vct-tournament/',
      strategies: 'generateSW',
      manifest: {
        name: 'VCT Champions Schedule',
        short_name: 'VCT Champions',
        description: 'Schedule VCT Champions Los Angeles',
        theme_color: '#1f2937',
        start_url: '.',
        display: 'standalone',
        background_color: '#a22425',
        icons: [
          {
            "src": "transp-icon-192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "manifest-icon-192.maskable.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "transp-icon-512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "manifest-icon-512.maskable.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
