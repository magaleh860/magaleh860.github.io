const { defineConfig } = require('vite');
const path = require('path');

// Vite config for static site with SCSS and vendor libs
module.exports = defineConfig({
  root: process.cwd(),
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      input: path.resolve(process.cwd(), 'index.html')
    }
  },
  optimizeDeps: {
    force: true // Force dependency pre-bundling
  },
  css: {
    devSourcemap: false, // Disable sourcemaps completely
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Reduce SCSS deprecation warnings
        logger: {
          warn: () => {} // Silence SCSS warnings
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['magnific-popup'] // Skip sourcemap warning for this package
  }
});
