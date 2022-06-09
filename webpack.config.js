const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'module-[contenthash].js',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // If svgs are used in project.
      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack', 'url-loader'],
      // },
      // If images are used in project.
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      views: path.resolve(__dirname, 'src/views'),
      themes: path.resolve(__dirname, 'src/themes'),
      hooks: path.resolve(__dirname, 'src/hooks'),
    },
  },
};
