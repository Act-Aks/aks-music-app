/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  importOrder: ['^@/(.*)$', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: false,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 100,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
}

export default config
