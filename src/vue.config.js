const ImageminPlugin = require('imagemin-webpack-plugin').default
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageminMozjpeg = require('imagemin-mozjpeg')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: 8080, // CHANGE YOUR PORT HERE!
  //   https: true,
  //   hotOnly: false,
  // },
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              )[1]

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`
            },
          },
        },
      },
    },
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production',
        plugins: [
          imageminMozjpeg({
            quality: 50,
            progressive: true,
          }),
        ],
      }),
      new FaviconsWebpackPlugin({
        logo: './src/assets/WikivapeiaLogoBlack.svg',
        outputPath: '/img/icons',
      }),
    ],
  },
}
