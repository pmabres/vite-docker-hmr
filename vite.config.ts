import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import postcssImport from "postcss-import";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    hmr: {
      port: 3010,
    },
    watch: {
      usePolling: true,
      // useFsEvents: true,
      // interval: 100,
    },
  },
  plugins: [
    react(),
    eslintPlugin(),
    postcssImport(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
});
