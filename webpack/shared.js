'use strict';

const paths = require('./paths');

module.exports = () => ({
	context: paths.context,
	module: {
		rules: [
			{ test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{ test: /\.(svg|png|jpg)$/i,
				exclude: /node_modules/,
				use: [
					{ loader: 'file-loader',
						options: {
							outputPath: 'images/',
							name: '[name].[ext]'
						}
					}
				]
			},
		]
	},
	resolve: {
		extensions: [ '.jsx', '.js', '.json' ],
		alias: {
			Lib: paths.libPath
		},
		modules: [
			'node_modules'
		]
	}
});

