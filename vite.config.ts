import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
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
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
