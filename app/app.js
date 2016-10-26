var http = require("http");
var PORT = 3000;
var server = http.createServer(function(req,res){

  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write("Node Rocks");
  res.end();
}).listen(3000);
console.log("Server running on : "+PORT);
