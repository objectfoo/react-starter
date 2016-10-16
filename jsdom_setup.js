'use strict';

import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// setup test environment to look like browser
global.document = doc;
global.window = win;

Object.keys(window).forEach(key => {
	if (!(key in global)) {
		global[key] = window[key];
	}
});

global.React = require('react');
global.ReactDOM = require('react-dom');
