const http = require("http");
const _ = require("underscore");


var msg = "Hello World at " + new Date() + "!";
console.log(msg);

http.createServer(respond).listen(8080);

function respond(request, response){
    response.write("<h1>Hello NodeJS</h1>");
    response.end();
}