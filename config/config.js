'use strict';

const path = require('path');

module.exports = {
	publicPath: '/',
	contentBase: path.resolve(__dirname, '../dist'),
	libPath: path.resolve(__dirname, '../src/lib'),
	context: path.resolve(__dirname, '../src/')
};
