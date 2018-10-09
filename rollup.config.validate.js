import cjs from 'rollup-plugin-cjs-es'
import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: 'src/gen/temp_validate.js',
    output: [
      { file: 'src/gen/validate.js', format: 'es' }
    ],
    plugins: [
      resolve(),
      cjs({
        nested: true
      })
    ]
  }
]
