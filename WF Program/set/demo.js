var http=require('http');
var uc=require('upper-case');
http.createServer(function(req,res){
  res.writeHead(200,{'content-type':'html/text'});
  res.write(uc.upperCase("hello world good morning...!"));
  res.end();
}).listen(8080)