const Koa = require('koa'); //require Koa
const path = require('path'); // require its path
const serve = require('koa-static'); //require koa-static to display static files such as html, css or js

const staticDirPath = path.join(__dirname, 'html'); // create a static path for html folder.

const server = new Koa()

server.use(serve(staticDirPath)) //middleware, fetch pages from html dir. 

server.listen(5000) //listen to our server on port 5000