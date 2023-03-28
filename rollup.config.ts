import ts from '@rollup/plugin-typescript'

export default {
  input: 'src/html-inspect.ts',
  output: [
    {
      file: 'dist/cjs/html-inspect.js',
      format: 'cjs',
      exports: 'auto'
    },
    {
      file: 'dist/esm/html-inspect.js',
      format: 'esm'
    },
    {
      file: 'dist/umd/html-inspect.js',
      format: 'umd',
      name: 'htmlInspect'
    }
  ],
  plugins: [
    ts({ target: 'es2015', exclude: ['src/**/*.test.ts'] })
  ]
}
