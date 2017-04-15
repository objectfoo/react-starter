'use strict';

const ReactDOM = global.ReactDOM;
import App from './App/index';

ReactDOM.render(
	<App {...{title: 'Counter', initialValue: 0}} />,
	document.getElementsByTagName('main')[0]
);
