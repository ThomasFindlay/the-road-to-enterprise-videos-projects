module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'stylelint',
      {
        configFile: 'stylelint.config.js',
      },
    ],
    'postcss-import',
    'postcss-extend',
    'precss',
    // ['tailwindcss/nesting', 'postcss-nesting'],
    // 'tailwindcss',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
          'nesting-rules': false,
        },
      },
    ],
    'postcss-reporter',
  ],
}
