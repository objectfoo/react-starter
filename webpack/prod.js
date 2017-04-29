'use strict';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanCSSPlugin = require('less-plugin-clean-css');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const WebpackHtmlPlugin = require('webpack-html-plugin');

const shared = require('./shared');
const paths = require('./paths');
const extractCss = new ExtractTextPlugin({
	allChunks: true,
	filename: 'style.[contenthash].css'
});

module.exports = env => {
	var build = shared();

	build.devtool = 'source-map';

	build.entry = { app: './browser.js' };

	build.output = {
		path: paths.contentBase,
		filename: '[name].[chunkhash].js',
	};

	/**
	 * Loaders
	 */
	build.module.rules.push({
		test: /\.less$/,
		use: extractCss.extract({
			use: [
				{ loader: 'css-loader', options: { sourceMap: true } },
				{
					loader: 'less-loader',
					options: {
						plugins: [
							new CleanCSSPlugin({ advanced: true, compatability: '*', level: 2, sourceMap: true })
						]
					}
				}
			]
		})
	});

	/**
	 * Plugins
	 */
	build.plugins = [
		new CleanWebpackPlugin(paths.cleanPaths, { root: paths.root }),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: ({ resource }) => /node_modules/.test(resource)
		}),
		extractCss,
		new WebpackHtmlPlugin({
			title: 'DEMO: react-starter',
			template: paths.context + '/index.ejs',
			filename: 'index.html'
		}),
		new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })
	];

	return build;
};
