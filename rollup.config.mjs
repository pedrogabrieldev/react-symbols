import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
  ],
  plugins: [typescript()],
  external: ['react', 'react/jsx-runtime'],
})
