const path = require('path');
const server = require('server');

server({
	public: path.resolve(__dirname, '../../dist'),
	env: 'development'
});
