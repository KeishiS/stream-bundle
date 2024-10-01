import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, './src/extension'),
  base: './',
  build: {
    outDir: resolve(__dirname, 'extension'),
    lib: {
      entry: resolve(__dirname, './src/extension/index.ts'),
      name: 'Extension',
      fileName: 'index',
      formats: ['cjs'],
    },
  },
});
