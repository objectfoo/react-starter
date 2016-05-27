'use strict';

import App from './components/App';

const ReactDOM = global.ReactDOM;
const data = {title: 'the title'};
let host = document.getElementsByTagName('main');

if (host.length > 0) {
	host = host[0];

	ReactDOM.render(
		<App data={data} />,
		document.getElementsByTagName('main')[0]
	);
}
