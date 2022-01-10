const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const { DefinePlugin } = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.scss$/;

module.exports = {
  target: "node",

  context: path.resolve(__dirname, '../'),

  mode: NODE_ENV ? NODE_ENV : 'development',

  entry: './src/server/server.js',

  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: "server.js"
  },

  externals: [nodeExternals()],

  optimization: {
    minimize: false
  },

  resolve: {
    plugins: [new TsconfigPathsWebpackPlugin()],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss', 'css'],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]--[hash:base64:5]',
              exportOnlyLocals: true,
            },
          },
        },
          'sass-loader',
        ],
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })]
};
