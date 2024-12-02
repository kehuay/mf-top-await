import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import topLevelAwait from 'vite-plugin-top-level-await'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    federation({
      name: 'top-await-mf',
      shared: {
        vue: {}
      }
    }),

    topLevelAwait(
      {
        promiseExportName: "__tla",
        promiseImportName: i => `__tla_${i}`
      }
    ),
  ],
  // build: {
  //   target: 'chrome89'
  // }
})
