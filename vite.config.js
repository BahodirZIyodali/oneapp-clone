import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { v1 } from 'uuid'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


