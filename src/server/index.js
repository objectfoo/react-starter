const path = require('path');
const server = require('server');
const get = server.router.get;

server({
	public: path.resolve(__dirname, '../../dist'),
	env: 'development'
});
