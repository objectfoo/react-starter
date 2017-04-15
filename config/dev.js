'use strict';

const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./base.js');
const webpackMerge = require('webpack-merge');
const publicPath = require('./config').publicPath;

module.exports = function (env) {
	return webpackMerge(commonConfig(), {
		devtool: 'cheap-module-source-map',
		entry: {
			app: [
				'react-hot-loader/patch',
				'webpack-dev-server/client?http://localhost:8080',
				'webpack/hot/only-dev-server',
				'./index.js'
			],
			vendor: [
				'react',
				'react-dom'
			]
		},
		devServer: {
			hot: true,
			compress: false,
			contentBase: path.resolve(__dirname, '../dist'),
			publicPath: publicPath
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin()
		]
	});
};
