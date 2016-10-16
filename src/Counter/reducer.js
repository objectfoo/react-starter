'use strict';

import * as t from './actionTypes';

const initialState = 0;

const reducer = (state=initialState, action={}) => {
	switch (action.type) {
	case t.INCREMENT:
		return state + 1;
	default:
		return state;
	}
};

export {reducer as default};