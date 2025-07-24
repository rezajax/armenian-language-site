import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Learn Armenian project.
// See https://vitejs.dev/config/ for more details.
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow the dev server to serve files from one level up to load JSON in public/data
      allow: ['..'],
    },
  },
});