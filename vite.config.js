import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/arunkumars-portfolio-website-professional/', // GitHub Pages repository name
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // Include GLB assets
  server: {
    host: '0.0.0.0', // Allows access from mobile devices
    port: 5173, // Default port for Vite server
    strictPort: true, // Fails if the port is already in use
    historyApiFallback: true, // SPA fallback to index.html
    watch: {
      usePolling: true, // Ensures proper watching in some environments
    },
  },
  build: {
    outDir: 'dist', // Directory for the production build
    emptyOutDir: true, // Ensures the dist directory is cleaned before a new build
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Organized asset output
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});




// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.glb'],
//   base: '/my-portfolio-website-professional', // Set the base to your repository name
// });
