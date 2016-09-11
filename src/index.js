'use strict';

const ReactDOM = global.ReactDOM;
import App from './App/App';

ReactDOM.render(
	<App {...{title: 'Counter', initialValue: 0}} />,
	document.getElementsByTagName('main')[0]
);
