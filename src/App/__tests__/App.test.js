'use strict';

import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';

import App from '../App';
import Counter from '../../Counter/Counter';

test('Should render title from props and Counter', t => {
	const props = {title: '__title__'};
	const wrapper = shallow(React.createElement(App, props, null));
	const headline = wrapper.find('h1');
	const counter = wrapper.find(Counter);

	t.is(headline.length, 1);
	t.is(headline.text(), '__title__');
	t.is(counter.length, 1);
});
