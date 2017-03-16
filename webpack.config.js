const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, './src'),
	performance: {
		hints: false
	},
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
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		compress: false,
		contentBase: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{ loader: 'babel-loader' }
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?modules',
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};
