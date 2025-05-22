import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
module.exports = defineConfig({
  plugins: [react()],
});
