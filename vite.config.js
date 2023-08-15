import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
export default defineConfig({
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[folder]_[local]__[hash:base64:5]',
    },
  },
});
