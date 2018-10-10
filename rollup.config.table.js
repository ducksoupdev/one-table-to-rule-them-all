import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const conf = {
  input: 'src/table.js',
  output: {
    name: 'mosaicTable',
    file: 'dist/table.umd.js',
    format: 'umd'
  },
  plugins: [
    babel({
      babelrc: false,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-proposal-object-rest-spread'
      ]
    }),
    resolve(),
    commonjs()
  ],
  context: 'window'
}

export default [
  { ...conf },
  { ...conf, output: { ...conf.output, file: 'dist/table.umd.min.js' }, plugins: [...conf.plugins, uglify()] }
]
