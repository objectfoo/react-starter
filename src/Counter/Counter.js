'use strict';

import React from 'react';
import Debug from 'debug';
const debug = Debug('Counter');

export default class Count extends React.Component {
	componentWillMount() {
		debug('WILL MOUNT (server, client)');
	}

	componentDidMount() {
		debug('DID MOUNT (client only) <-- waiting for state change');
	}

	componentWillReceiveProps() {
		debug('WILL RECEIVE PROPS (server, client)');
	}

	shouldComponentUpdate() {
		debug('SHOULD UPDATE (server, client)');
		return true;
	}

	componentWillUpdate() {
		debug('WILL UPDATE (server, client)');
	}

	componentDidUpdate() {
		debug('DID UPDATE (server, client) <-- waiting for state change');
	}

	componentWillUnmount() {
		debug('WILL MOUNT (server, client)');
	}

	render() {
		debug('RENDER (server, client)');
		return(
			<p className='text-center'>
				<strong>{this.props.number}</strong>
			</p>
		);
	}
}
