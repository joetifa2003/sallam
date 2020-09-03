/* eslint-disable @typescript-eslint/no-var-requires */
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      minimize: true,
      minimizer: [new TerserPlugin()],
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
              )[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
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
    ],
  },
};
