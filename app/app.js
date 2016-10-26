var express = require("express");
var app = express();
var dataFile = require("./data/data.json");
app.set('port',process.env.PORT || 3000)
var PORT = app.get("port");
app.get("/",function(req,res){
  var info = '';
  dataFile.speakers.forEach(function(data){
    info +=`
      <li>
        <h1>${data.name}</h1>
        <p>${data.summary}</p>
      </li>
    `
  })
  res.send(`
      <h1>Node Work With</h1>
      ${info}
      `);
})


app.listen(PORT,function(){
  console.log("Server is Running on: "+PORT);
})

// var http = require("http");
// var server = http.createServer(function(req,res){
//
//   res.writeHead(200,{"Content-Type":"text/plain"});
//   res.write("Node Rocks");
//   res.end();
// }).listen(3000);
// console.log("Server running on : "+PORT);
