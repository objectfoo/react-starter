'use strict';

import React from 'react';

var debug = require('debug')('Counter');

class Count extends React.Component {

	constructor(props) {
		super(props);
		debug('constructor (client, server)');
		this.onClick = this.onClick.bind(this);
	}

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

	onClick() {
		this.props.increment();
	}

	render() {
		debug('RENDER (server, client)');
		return(
			<div className='counter'>
				<p className='text-center'>
					<strong>{this.props.number}</strong>
				</p>
				<button onClick={this.onClick} type='button'>
					increment
				</button>
			</div>
		);
	}
}

export {Count as default};
