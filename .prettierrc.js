// Prettier configuration
// https://prettier.io/docs/en/configuration.html
module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'auto',
  importOrder: ['^react', '^@?\\w', '^\\.'],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  importOrderBuiltinModulesToTop: false,
  importOrderSortSpecifiers: true,
  rangeStart: 0,
  rangeEnd: Infinity,
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
  ],
};
