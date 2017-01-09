'use strict';

const ReactDOM = global.ReactDOM;
const App = require('./App/index.js');

ReactDOM.render(
	<App {...{title: 'Counter', initialValue: 0}} />,
	document.getElementsByTagName('main')[0]
);
