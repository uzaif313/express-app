var express = require("express");
var reload = require("reload");
var app = express();
var dataFile = require("./data/data.json");

app.set('port',process.env.PORT || 3000)
var PORT = app.get("port");
app.set("appData",dataFile);
app.set("view engine","ejs");
app.set("views","app/views")

app.locals.siteTitle = "Ahmedabad Meetups"

app.use(express.static("app/public"));
app.use(require("./routes/index"));
app.use(require("./routes/speakers"));



var  server=app.listen(PORT,function(){
  console.log("Server is Running on: "+PORT);
})

reload(server,app);