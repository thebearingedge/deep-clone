import ts from '@rollup/plugin-typescript'

export default {
  input: 'src/deep-clone.ts',
  output: [
    {
      file: 'dist/cjs/deep-clone.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/esm/deep-clone.js',
      format: 'esm'
    },
    {
      file: 'dist/umd/deep-clone.js',
      format: 'umd',
      name: 'deepClone',
      exports: 'named'
    }
  ],
  plugins: [
    ts({ target: 'es2015', exclude: ['src/**/*.test.ts'] })
  ]
}
