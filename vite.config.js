import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  jsxFactory: 'jsx',
    jsxInject: `import React from "react";`
})

