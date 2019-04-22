var http = require('http');
var port = 8180;

function handler_request(handler_request, response) {
    response.writeHead(200, {
        'Content-type' : 'text/plain'
    });

    response.end('Hello World, Are you restless to go restful?');

    console.log('requested');
}

http.createServer(handler_request).listen(port, '127.0.0.1');

console.log(`Started NodeJS http server at http://127.0.0.1:${port}`);