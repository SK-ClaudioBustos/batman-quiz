import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-plugin-tsconfig-paths';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tsConfigPaths(),
    svgr(
      {
        svgrOptions: {
          icon: true, // Usa el viewBox para hacer el SVG escalable
          expandProps: 'end', // Expande las props para permitir width, height, fill, etc.
        },
      }
    )],  resolve: {
    alias: {
      '@': "/src"
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },  
})
