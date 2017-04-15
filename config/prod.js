'use strict';

const webpack = require('webpack');
const commonConfig = require('./base.js');
const webpackMerge = require('webpack-merge');

module.exports = function(env) {
	return webpackMerge(commonConfig(), {
		entry: {
			app: './index.js',
			vendor: [ 'react', 'react-dom' ]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify('production')
				}
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor'
			}),
			new webpack.optimize.UglifyJsPlugin({
				beautify: false,
				mangle: {
					screw_ie8: true,
					keep_fnames: true
				},
				compress: {
					screw_ie8: true
				},
				comments: false
			})
		]
	});
};
