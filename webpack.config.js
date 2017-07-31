var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js'],
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    },
    plugins: [
        new CommonsChunkPlugin('init.js'),
        new OpenBrowserPlugin({url: 'http://localhost:8080'})
    ]
};
