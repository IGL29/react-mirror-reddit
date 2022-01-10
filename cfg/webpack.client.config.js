const path = require('path');
const {HotModuleReplacementPlugin, DefinePlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const DEV_PLUGINS = [ new CleanWebpackPlugin(), new HotModuleReplacementPlugin() ];
const COMMON_PLUGINS = [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })];

function setupDevTool() {
  if (IS_DEV) return 'source-map';
  if (IS_PROD) return false;
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',

  context: path.resolve(__dirname, '../'),

  resolve: {
    plugins: [new TsconfigPathsWebpackPlugin()],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss', '.css', '.png'],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    }
  },

  entry: [
    './src/client/index.jsx',
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
  ],

  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g)$/i,
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
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
            }
          }
        ],
      },
    ]
  },

  devtool: setupDevTool(),

  plugins: (IS_DEV) ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,
};
