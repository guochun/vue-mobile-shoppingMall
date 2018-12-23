const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

function alias (config) {
  config.resolve.alias
    .set('@', resolve('src'))
    .set('views', resolve('src/views'))
    .set('components', resolve('src/components'))
}

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './' : '/',
  productionSourceMap: true,
  chainWebpack: (config) => {
    alias(config)
  }
}




