# React starter

Quickie react starter.

Cribbed a nice component that demos lifecycle from http://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm

works with node v0.10.28 (for now)

gulp, browserify, eslint, Mocha, chai, auto reload with live-server.
Loads React and ReactDOM as browser scripts to keep them out of the bundle.

```bash
"scripts": {
  "build": "gulp build",
  "watch": "gulp watchify",
  "live-server": "live-server --port=3004 --ignore=node_modules,src --open=/dist/",
  "test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js --recursive",
  "test:watch": "npm run test -- --watch"
}
```
