var express = require("express");
var reload = require("reload");
var app = express();
var dataFile = require("./data/data.json");
app.set('port',process.env.PORT || 3000)
var PORT = app.get("port");
app.use(express.static("app/public"));
app.set("appData",dataFile);
app.use(require("./routes/index"));
app.use(require("./routes/speakers"));



var  server=app.listen(PORT,function(){
  console.log("Server is Running on: "+PORT);
})

reload(server,app);