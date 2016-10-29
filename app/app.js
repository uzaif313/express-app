var express = require("express");
var reload = require("reload");
var app = express();
var io = require("socket.io")();
var dataFile = require("./data/data.json");

app.set('port',process.env.PORT || 3000)
var PORT = app.get("port");
app.set("appData",dataFile);
app.set("view engine","ejs");
app.set("views","app/views")

app.locals.siteTitle = "Ahmedabad Meetups"
app.locals.allSpeakers = dataFile.speakers;
app.use(express.static("app/public"));
app.use(require("./routes/index"));
app.use(require("./routes/speakers"));
app.use(require("./routes/feedback"));
app.use(require("./routes/api"));
app.use(require("./routes/chat"));


var  server=app.listen(PORT,function(){
  console.log("Server is Running on: "+PORT);
})

io.attach(server);
io.on('connection',function(socket){
	console.log('user connected');
	socket.on("send_message",function(data){
		io.emit('update_messages',data);
	})
})

reload(server,app);