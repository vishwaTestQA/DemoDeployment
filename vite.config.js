import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            viteStaticCopy({
               targets:[
                {
                  src: 'dist/.vite/manifest.json',
                  dest: '.'
                }
               ]
  })
  ],
  // base: '/',
  build: {
    manifest: true, // 👈 important
  },
})
