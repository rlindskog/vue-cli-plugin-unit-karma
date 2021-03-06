module.exports = api => {
  api.render('./template')

  const devDependencies = {
    '@vue/test-utils': '^1.0.0-beta.16',
    'chai': '^4.1.2',
    'mocha': '^5.0.5',
  }

  api.extendPackage({
    devDependencies,
    scripts: {
      'test:unit': 'vue-cli-service test:unit'
    }
  })

  if (api.hasPlugin('eslint')) {
    api.render(files => {
      files['tests/unit/.eslintrc.js'] = api.genJSConfig({
        env: { mocha: true },
        rules: {
          'import/no-extraneous-dependencies': 'off'
        }
      })
    })
  }
}
