# React starter

Quickie react starter.

works with node v0.10.28

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
