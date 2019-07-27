const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            '@primary-color': '#1DA57A',
            '@link-color': '#1DA57A',
            '@border-radius-base': '2px'
          },
          javascriptEnabled: true
        }
      }
    }
  ],
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }] // `style: true` for less
    ]
  }
}
