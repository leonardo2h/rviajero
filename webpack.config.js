const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  externals: {
    jquery: 'jQuery',
  },
  entry: './src/frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/frontend/index.html',
      favicon: './src/frontend/statics/icon.png',
    }),
    new WebpackPwaManifestPlugin({
      name: 'Registro Viajero - Blog de viajes',
      short_name: 'Registro Viajero',
      description:
        'Guia de viajes donde puedes encontrar lugares para visitar, consejos, tips y toda la información necesaria para organizar un viaje.',
      background_color: '#fff',
      theme_color: '#07578a',
      icons: [
        {
          src: path.resolve('src/frontend/statics/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        // {
        //   urlPattern: new RegExp(/^https?.*/),
        //   handler: 'NetworkFirst',
        //   method: 'GET',
        // },
        {
          urlPattern: new RegExp('https://res.cloudinary.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp('http://localhost:3000/api'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
  },
};
