import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'graphics',
    rollupOptions: {
      input: {
        graphics: resolve(__dirname, 'src/graphics/graphics.html'),
      },
    },
  },
});
