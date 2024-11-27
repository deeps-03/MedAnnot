import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MedAnnot/', // Ensure this matches your GitHub repository name
  plugins: [react()],
  server: {
    port: 1235
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'konva', 'react-konva', 'zustand']
        }
      }
    }
  }
});