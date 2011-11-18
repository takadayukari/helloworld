var http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Contest-Type': 'text/plain'});
 res.end('Hello World\n');
}).listen(80);
