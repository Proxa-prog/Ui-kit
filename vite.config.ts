// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  publicDir: 'src/assets',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vite-ui-kit',
      fileName: 'vite-ui-kit',
    },
  },
  plugins: [dts()],
});