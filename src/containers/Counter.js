'use strict';

import {connect} from 'react-redux';
import Counter from '../Counter/Counter';
import {increment} from '../Counter/actions';

const mapStateToProps = state => {
	return {
		number: state.counter
	};
};

const mapActionsToProps = dispatch => {
	return {
		increment: () => {
			dispatch(increment());
		}
	};
};

const connected = connect(
	mapStateToProps,
	mapActionsToProps
)(Counter);

export {connected as default};
