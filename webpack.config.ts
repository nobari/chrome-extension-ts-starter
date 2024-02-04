import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import {
  Configuration as WebpackConfiguration,
  WebpackOptionsNormalized
} from 'webpack'

// This interface is merging the properties from the webpack-dev-server typings.
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackOptionsNormalized['devServer']
}
const DIST_FOLDER = 'extension'

const config = (env: { production: boolean }) => {
  const config: Configuration = {
    devtool: env.production ? false : 'inline-source-map',
    mode: env.production ? 'production' : 'development',
    devServer: {
      liveReload: true,
      hot: true, // Enable Hot Module Replacement
      open: 'popup' // Open the browser after server has been started
    },
    entry: {
      popup: './src/popup/index.ts',
      options: './src/options/index.ts',
      foreground: './src/foreground.ts',
      'service-worker': './src/service-worker.ts'
    },
    module: {
      rules: [
        { test: /\.ts?$/, use: 'ts-loader', exclude: '/node_modules/' },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader', // translates CSS into CommonJS
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        },
        { test: /\.html$/, use: 'html-loader' }
      ]
    },
    output: {
      path: path.join(__dirname, DIST_FOLDER),
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
      ...(env.production
        ? [new CleanWebpackPlugin()] // to avoid watch mode removing the folder
        : []),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'static',
            to: '.',
            globOptions: {
              ignore: ['**/.DS_Store'] // This line ignores .DS_Store files
            }
          }
        ]
      }),
      new MiniCssExtractPlugin({
        filename: '[name]/styles.css'
      }),
      // HtmlWebpackPlugin instances for each HTML file
      new HtmlWebpackPlugin({
        filename: 'popup/index.html',
        template: './src/popup/index.html', // path to the actual popup HTML file
        chunks: ['popup']
      }),
      new HtmlWebpackPlugin({
        filename: 'options/index.html',
        template: './src/options/index.html', // path to the actual options HTML file
        chunks: ['options']
      })
    ]
  }
  return config
}

export default config
