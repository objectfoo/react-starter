'use strict';

var React = global.React;
var Counter = require('../Counter/Counter');

class App extends React.Component {
	constructor(props) {
		super(props);
		const {initialValue=0} = this.props;

		this.increment = this.increment.bind(this);

		this.state = {
			value: initialValue
		};
	}

	increment() {
		this.setState({
			value: this.state.value + 1
		});
	}

	render() {
		const {title} = this.props;

		return(
			<div>
				<h1>{title}</h1>
				<Counter number={this.state.value} />
				<button onClick={this.increment}>increment</button>
			</div>
		);
	}	
}

App.propTypes = {
	title: React.PropTypes.string.isRequired,
	initialValue: React.PropTypes.number
};

module.exports = App;
