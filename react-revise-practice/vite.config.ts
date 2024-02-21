import * as path from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@welldone-software/why-did-you-render'
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      enabled: true,
      provider: 'v8',
      exclude: [
        // Add patterns to exclude here, for example, to ignore Storybook files
        '**/*.stories.@(js|jsx|ts|tsx)',
        '**/*.mdx',
        '**/node_modules/**',
        '**/.storybook/**',
        '**/.eslintrc.cjs',
        '**/*.config.@(js|jsx|ts|tsx)',
        '**/constants/**',
        '**/types/**',
        '**/coverage/**',
        '**/vite-env.d.ts',
        '**/wdyr.ts',
        '**/routes.tsx',
        '**/App.tsx',
        '**/main.tsx',
        '**/materialTheme.ts'
      ]
    }
  }
})
