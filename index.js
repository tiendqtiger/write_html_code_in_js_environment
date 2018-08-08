var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {"content-type":"text/plain; charset=utf-8"});
    res.write("Success !!!");
    res.end();
}).listen(1234);