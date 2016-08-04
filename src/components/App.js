'use strict';

var React = global.React;
var Count = require('./Count');

var App = React.createClass({
	getInitialState: function() {
		return {
			data: this.props.initialData.number
		};
	},

	render: function() {
		var s = {
			maxWidth: '200px',
			textAlign: 'center',
			margin: '4em auto 2em'
		};

		return(
			<div style={s}>
				<Count number={this.state.data} />
				<button onClick={this.incrementCount}>increment count</button>
			</div>
		);
	},

	incrementCount: function() {
		this.setState({
			data: this.state.data + 1
		});
	}
});

module.exports = App;