'use strict';

import React from 'react';
const createElement = React.createElement;
import test from 'ava';
import {shallow} from 'enzyme';

import Counter from '../../Counter/Counter';

test('Should render count', t => {
	const props = {number: 0};
	const wrapper = shallow(createElement(Counter, props, null));
	const count = wrapper.find('strong');

	t.is(count.text(), '0');
});
