// #docregion
import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

//paths are relative to the execution path
export default {
  input: 'app/main-aot.js',
  output: {
    file: 'aot/dist/build.js', // output a single application bundle
    format: 'iife',
    sourcemap: true,
    sourcemapFile: 'aot/dist/build.js.map'
  },
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: ['node_modules/rxjs/**']
    }),
    uglify()
  ]
}
