var http = require('http');
var fs = require('fs');

var port = 3000;

var index = fs.readFileSync(__dirname + '/../client/client.html');
var peng = fs.readFileSync(__dirname + '/../client/nyanpenguin.gif');

function onRequest(request, response) {
    
    if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'} );
        response.end();
        return;
    }
    else if(request.url === "/assets/nyanpenguin.gif") {
        response.writeHead(200, {'Content-Type': 'image/gif'} );
        response.end(peng);
        return;        
    }
    else {
        response.writeHead(200, {"Content-Type": "text/html"}); 
        response.write(index);
        response.end(); 
    }
}

var app = http.createServer(onRequest).listen(port);

console.log("Listening on port " + port);