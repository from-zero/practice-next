/* eslint-disable */
const withSass= require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')
const path = require('path')

module.exports = withPlugins([
  [
    withSass, 
    {
      cssModules:true,
      cssLoaderOptions: {
        exclude: path.resolve(__dirname, 'src/styles'),
        importLoaders: 1,
        localIdentName: '[path]___[local]___[hash:base64:5]',
      },
      webpack: (config, { isServer }) => {
        if (isServer) {
          const antStyles = /antd\/.*?\/style\/css.*?/
          const origExternals = [...config.externals]
          config.externals = [
            (context, request, callback) => {
              if (request.match(antStyles)) return callback()
              if (typeof origExternals[0] === 'function') {
                origExternals[0](context, request, callback)
              } else {
                callback()
              }
            },
            ...(typeof origExternals[0] === 'function' ? [] : origExternals),
          ]

          config.module.rules.unshift({
            test: antStyles,
            use: 'null-loader',
          })
        }
        return config
        }
    }
  ]
])