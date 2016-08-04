'use strict';

import App from './components/App';

const ReactDOM = global.ReactDOM;
const initialData = {number: 0};
let host = document.getElementsByTagName('main');

if (host.length > 0) {
	host = host[0];

	ReactDOM.render(
		<App initialData={initialData} />,
		host
	);
}
