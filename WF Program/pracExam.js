var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('pracExam.txt',function(err,data){
        if(err) throw err;
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end()
    })
}).listen(8080)