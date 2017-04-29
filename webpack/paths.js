'use strict';

const path = require('path');

exports.root = path.resolve(__dirname, '../');
exports.publicPath = '/',
exports.contentBase = path.resolve(__dirname, '../dist');
exports.libPath = path.resolve(__dirname, '../src/lib');
exports.context = path.resolve(__dirname, '../src');
exports.cleanPaths = [
	exports.contentBase + '/*'
];
