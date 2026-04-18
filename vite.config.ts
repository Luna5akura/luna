// https://vite.dev/config/
import path from "path"
import react from '@vitejs/plugin-react';
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.md'],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;

          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/react-router') ||
            id.includes('/scheduler/')
          ) {
            return 'react-vendor';
          }

          if (id.includes('framer-motion') || id.includes('motion-dom')) {
            return 'motion-vendor';
          }

          if (
            id.includes('react-markdown') ||
            id.includes('remark-') ||
            id.includes('rehype-') ||
            id.includes('/unified/') ||
            id.includes('/mdast-') ||
            id.includes('/micromark') ||
            id.includes('/hast-') ||
            id.includes('/unist-') ||
            id.includes('/katex/')
          ) {
            return 'markdown-vendor';
          }

          if (id.includes('@radix-ui') || id.includes('lucide-react')) {
            return 'ui-vendor';
          }

          return 'misc-vendor';
        },
      },
    },
  },
  base: '/',
})
