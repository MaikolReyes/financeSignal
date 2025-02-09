import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    fs: {
      allow: ['.'],
    },
  },
  define: {
    'process.env': {}
  },
  build: {
    outDir: 'dist', // Define explícitamente el directorio de salida
  },
})