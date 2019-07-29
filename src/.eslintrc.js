module.exports = {
  env: {
    browser: true,
    commonjs: true,
    jest: false,
    node: false,
  },
  rules: {
    complexity: ['warn', 6],
    'max-lines-per-function': ['warn', {max: 15, skipBlankLines: true, skipComments: true}],
    'max-params': ['error', 2],
  },
};
