const path = require('path')
const { whenDev } = require('@craco/craco')
const { CracoAliasPlugin } = require('react-app-alias')
const CracoLessPlugin = require('craco-less')
require('react-scripts/config/env')

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {}
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  style: {
    modules: {
      localIndentName: whenDev(
        () => '[name:toLowercase]__[path:toLowercase]--[hash:base64:5]',
        '[hash:base64]'
      ),
      localIndentSalt: process.env.REACT_APP_MODULE_SECRET_KEY,
      localsConvention: 'camelCase',
      localIndentContext: path.resolve(__dirname, 'src')
    }
  }
}
