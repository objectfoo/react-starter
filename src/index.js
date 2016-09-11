'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './containers/Counter';
import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<div>
			<h1>Counter</h1>
			<Counter />
		</div>
	</Provider>,
	document.getElementsByTagName('main')[0]
);
