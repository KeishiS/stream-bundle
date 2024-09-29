import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dashboard',
    rollupOptions: {
      input: {
        dashboard: resolve(__dirname, 'src/dashboard/dashboard.html'),
      },
    },
  },
});
