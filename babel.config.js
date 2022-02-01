module.exports = {
  presets: ['@babel/env', '@babel/react'],
  env: {
    test: {
      plugins: ['transform-es2015-modules-commonjs', '@babel/plugin-transform-runtime'],
    },
  },
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread'],
};
