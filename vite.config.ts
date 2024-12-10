import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-plugin-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  resolve: {
    alias: {
      '@': "/src"
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
})
