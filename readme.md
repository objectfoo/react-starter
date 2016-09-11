# React/Redux starter

Quickie react/redux starter.

Cribbed a nice component lifecycle demo from http://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm

gulp, browserify, eslint, ava, auto reload with live-server.

## Commands

```bash
"scripts": {
    "build": "cross-env NODE_ENV=production gulp build",
    "watch": "gulp",
    "live-server": "live-server --port=3004 --watch=./dist --open=/dist/",
    "test": "ava --verbose --harmony",
    "test:watch": "npm run test -- --watch"
},
```
