import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'], // ponto de entrada dos componentes
  format: ['esm', 'cjs'],  // gera ESM e CommonJS
  dts: true,               // gera declarações TypeScript (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
})
