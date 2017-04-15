'use strict';

const webpack = require('webpack');
const config = require('./config');

module.exports = function() {
	return {
		context: config.context,
		output: {
			path: config.contentBase,
			filename: '[name].bundle.js',
			publicPath: config.publicPath,
			sourceMapFilename: '[name].map'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					use: [ 'babel-loader' ],
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.jsx', '.js', '.json'],
			alias: {
				Lib: config.libPath
			},
			modules: [
				'node_modules'
			]
		}
	};
};

