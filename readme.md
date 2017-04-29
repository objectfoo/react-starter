# React starter

Now requires Node 6.x.x

## scripts

```js
// build then run demo server, auto open browser
"start": "npm run build && npm run demo",

// demo server for built app, auto opens browser
"demo": "http-server ./dist -o -p 3000 -g true",

// build minified app
"build": "webpack -p --env=prod --profile"

// run dev server
"dev": "webpack-dev-server -d --env=dev --profile --color --open",
```

## Bundle size report

After the project is built, run the demo server and go to
http://localhost:3000/report.html


## Debug messages

The Counter class contain an example of debug messaging. [Debug docs](https://www.npmjs.com/package/debug).

```
# In chrome console, turn on debug messages for Counter class

localStorage.debug = 'Counter'
```
