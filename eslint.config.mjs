import EslintConfigs from '@eslint/js'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  EslintConfigs.configs.all,
  EslintConfigs.configs.recommended,
  {
    ignores: [
      '.yarn/',
      '.expo/',
      'node_modules/',
      '**/*.d.ts',
      'metro.config.js',
      'babel.config.js',
      'commitlint.config.cjs',
    ],
  },
]
