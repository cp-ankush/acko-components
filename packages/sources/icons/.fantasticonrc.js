module.exports = {
  inputDir: './src/ackox', // (required)
  outputDir: './dist/ackox/font', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['ts', 'css', 'json', 'html'],
  name: 'ackox',
  prefix: 'acx',
  normalize: true,
  templates: {
    css: './src/templates/css.hbs'
  },
  formatOptions: {
    json: {
      indent: 2
    },
    ts: {
      types: ['constant', 'literalId'],
      singleQuotes: true
    }
  }
};
