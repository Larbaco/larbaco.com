import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: [
        '**/*.js',
        '**/*.jsx',
        '**/*.mjs',
      ],
    }),
  ],
  base: '/',
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
