import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // More robust alias resolution
    },
  },
  // Uncomment and adjust if deploying to a subdirectory
  // base: '/binary',
  build: {
    outDir: 'dist', // Default output directory
  },
  // Optional: Add server settings for development
  server: {
    open: true, // Automatically open browser on dev server start
  },
});
