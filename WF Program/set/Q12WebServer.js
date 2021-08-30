var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end("Good Morning...!")
}).listen(8080);
console.log("Server Running at localhost://127.0.0.1:8080");