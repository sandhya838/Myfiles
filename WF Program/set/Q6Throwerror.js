var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
    var q=url.parse(req.url,true);
    var fileName="."+ q.pathname;
    fs.readFile(fileName,function(err,data){
        if(err){
            res.writeHead(400,{'content-type':'text/html'});
            return res.end("404 not found");
        }
        else{
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        }
    })
}).listen(8080);