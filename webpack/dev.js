'use strict';

const CleanCSSPlugin = require('less-plugin-clean-css');
const webpack = require('webpack');
const WebpackHtmlPlugin = require('webpack-html-plugin');

const shared = require('./shared');
const paths = require('./paths');

module.exports = () => {
	const build = shared();

	build.devtool = 'cheap-module-eval-source-map';

	build.devServer = {
		overlay: true,
		hot: true,
		stats: 'minimal',
		compress: false,
		contentBase: paths.contentBase,
		publicPath: paths.publicPath
	};

	build.entry = {
		app: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'./browser.js'
		]
	};

	/**
	 * Loaders
	 */
	build.module.rules.push({
		test: /\.less$/,
		use: [
			{ loader: 'style-loader' },
			{ loader: 'css-loader', options: { sourceMap: true } },
			{
				loader: 'less-loader',
				options: {
					sourceMap: true,
					plugins: [
						new CleanCSSPlugin({ advanced: true, compatability: '*', level: 2, sourceMap: true })
					]
				}
			}
		]
	});

	/**
	 * Plugins
	 */
	build.plugins = [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new WebpackHtmlPlugin({
			title: 'DEV: react-starter',
			template: paths.context + '/index.ejs',
			filename: 'index.html'
		})
	];

	return build;
};
