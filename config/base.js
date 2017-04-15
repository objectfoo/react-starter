'use strict';

const webpack = require('webpack');
const path = require('path');
const publicPath = require('./config').publicPath;

module.exports = function() {
	return {
		context: path.resolve(__dirname, '../src/'),
		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: '[name].bundle.js',
			publicPath: publicPath,
			sourceMapFilename: '[name].map'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: [ 'babel-loader' ],
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.jsx', '.js', '.json'],
			alias: {
				Lib: path.resolve(__dirname, '../src/lib')
			},
			modules: [ 'node_modules' ]
		}
	};
};

