import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, './src/dashboard'),
  build: {
    outDir: resolve(__dirname, 'dashboard'),
    rollupOptions: {
      input: {
        dashboard: resolve(__dirname, './src/dashboard/dashboard.html'),
      },
    },
  },
});
