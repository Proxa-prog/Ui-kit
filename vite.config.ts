/// <reference types="vitest" />
/// <reference types="vite/client" />

import {resolve} from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'

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
    plugins: [
        dts(),
        react()
    ],
    test: {
        globals: true,
        environment: 'jsdom', // @testing-library/jest-dom добавить к тестовому файлу
    },
});