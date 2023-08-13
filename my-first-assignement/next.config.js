const withTM = require('next-transpile-modules')(['@resvg/resvg-js-win32-x64-msvc', '@dicebear/core', 'sharp']);

module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      loader: 'node-loader',
    });

    // Add this block to handle CSS files
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });

    return config;
  },
});