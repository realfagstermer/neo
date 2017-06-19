'use strict';

var webpack = require('webpack');
var path = require('path');

const isDevBuild = process.argv[1].indexOf('webpack-dev-server') !== -1;

const webpackConfig = {
    context: __dirname,
    contentBase: __dirname,
    entry: './src/app.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/build',
        filename: 'app.js',
        publicPath: 'http://localhost:8081/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                },
            },
        ],
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
            'material-ui': path.resolve('./node_modules/material-ui'),
        },
    },
    devServer: {
        progress: true,
        colors: true,
        port: 8081,
        inline: true,
        compress: true,
        proxy: [
            { path: '/jquery.min.js', target: 'http://localhost:8081/node_modules/jquery/dist' },
        ],
    },
};

if (!isDevBuild) {
    webpackConfig.plugins = [
        // Replace any occurance of process.env.NODE_ENV with the string 'production'
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         warnings: false,
            //     },
            comments: false,
            beautify: true,
        }),
    ];
}

module.exports = webpackConfig;
