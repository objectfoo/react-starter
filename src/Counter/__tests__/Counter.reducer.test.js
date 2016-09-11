'use strict';

import test from 'ava';
import reducer from '../reducer';
import {increment} from '../actions';

test('should handle increment action', t => {
	const actions = [
		increment(),
		increment()
	];

	let result = actions.reduce(function(acc, action) {
		acc = reducer(acc, action);
		return acc;
	}, result);

	t.is(result, 2);
});
