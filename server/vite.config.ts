import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TrackerServer',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['express', 'cors', 'helmet', 'pg', 'dotenv', 'zod'],
    },
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
