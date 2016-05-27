'use strict';

const React = global.React;

class App extends React.Component {
	render() {
		const {title} = this.props.data;

		return (
			<p>{title}</p>
		);
	}
}

export {App as default};
