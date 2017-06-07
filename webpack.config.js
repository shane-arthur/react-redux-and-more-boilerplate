/* Please note config is placed at root level as webpack-asset resolution is searched-for at the root level */

var webpack = require('webpack');
var path = require('path');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
// note the different casing here for variables
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack/isomorphic.config'));
var devServerPort = require('./src/js/config/index.config.js').serverConfig.webpackDevServerPort;


module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:'+devServerPort,
            'webpack/hot/only-dev-server',
            './src/js/app'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:'+devServerPort+'/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "env": {
                        "development": {
                            "presets": ["react-hmre"]
                        }
                    }
                }
            },
            { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        webpackIsomorphicToolsPlugin.development(),
        new webpack.HotModuleReplacementPlugin(),
        new ProgressPlugin(function (percentage, msg) {
            if ((percentage * 100) % 20 === 0) {
                console.info((percentage * 100) + '%', msg);
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}