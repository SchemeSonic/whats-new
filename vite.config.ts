/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'WhatsNew',
      fileName: format =>
        format === 'es' ? 'whats-new.js' : 'whats-new.umd.cjs',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mui/material',
        '@emotion/react',
        '@emotion/styled',
        'react-markdown',
        'rehype-raw',
        'remark-gfm',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          '@mui/material': 'MaterialUI',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
          'react-markdown': 'ReactMarkdown',
          'remark-gfm': 'remarkGfm',
          'rehype-raw': 'rehypeRaw',
        },
      },
    },
    cssMinify: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
