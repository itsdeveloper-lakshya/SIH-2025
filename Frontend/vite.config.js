import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      external: [
        // The failing module is "firebase/app"
        'firebase/app', 
      ],
    },
  },
});
