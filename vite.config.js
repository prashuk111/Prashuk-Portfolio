import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'

// Custom zero-dependency native Node zlib Brotli & Gzip compression plugin
function compressionPlugin() {
  return {
    name: 'vite-native-compression',
    apply: 'build',
    enforce: 'post',
    closeBundle: async () => {
      const distDir = path.resolve(import.meta.dirname, 'dist')
      if (!fs.existsSync(distDir)) return

      const compressFiles = (dir) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true })
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name)
          if (entry.isDirectory()) {
            compressFiles(fullPath)
          } else if (/\.(js|css|html|svg|json)$/i.test(entry.name) && !entry.name.endsWith('.br') && !entry.name.endsWith('.gz')) {
            const content = fs.readFileSync(fullPath)
            if (content.length > 512) {
              // Brotli (.br)
              const brContent = zlib.brotliCompressSync(content, {
                params: {
                  [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
                },
              })
              fs.writeFileSync(`${fullPath}.br`, brContent)

              // Gzip (.gz)
              const gzContent = zlib.gzipSync(content, { level: 9 })
              fs.writeFileSync(`${fullPath}.gz`, gzContent)
            }
          }
        }
      }

      compressFiles(distDir)
      console.log('⚡ Native Brotli (.br) & Gzip (.gz) compression generated successfully for all static assets.')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compressionPlugin(),
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap'
            }
            if (id.includes('motion')) {
              return 'vendor-motion'
            }
            return 'vendor-core'
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
