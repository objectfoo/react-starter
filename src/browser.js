'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index';

ReactDOM.render(
	<App {...{title: 'Counter', initialValue: 0}} />,
	document.getElementsByTagName('main')[0]
);
