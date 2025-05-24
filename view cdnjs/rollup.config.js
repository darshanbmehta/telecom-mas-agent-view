import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: '../telecom_mas_agent/index.js', // Entry file
  output: {
    file: 'dist/index.js', // Output file
    format: 'umd', // Universal Module Definition
    name: 'TelecomMASAgent', // Global variable name
  },
  plugins: [resolve(), commonjs()],
};
