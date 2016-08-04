'use strict';

var React = global.React;

var Count = React.createClass({
	componentWillMount: function() {
		global.console.log('WILL MOUNT (server, client)');
	},

	componentDidMount: function() {
		global.console.log('DID MOUNT (client only) <-- waiting for state change');
		global.console.log(' ');
	},

	componentWillReceiveProps: function() {
		global.console.log('WILL RECEIVE PROPS (server, client)');
	},

	shouldComponentUpdate: function() {
		global.console.log('SHOULD UPDATE (server, client)');
		return true;
	},

	componentWillUpdate: function() {
		global.console.log('WILL UPDATE (server, client)');
	},

	componentDidUpdate: function() {
		global.console.log('DID UPDATE (server, client) <-- waiting for state change');
		global.console.log(' ');
	},

	componentWillUnmount: function() {
		global.console.log('WILL MOUNT (server, client)');
	},

	render: function() {
		global.console.log('RENDER (server, client)');
		return(
			<p>
				<strong>{this.props.number}</strong>
			</p>
		);
	}
});


module.exports = Count;