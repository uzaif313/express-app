var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
  var data = req.app.get("appData");
  var speakers = data.speakers;  

  var artWork = []; 	
  data.speakers.forEach(function(item){
  	artWork = artWork.concat(item.artwork);
  });
  
  res.render('index',{
	title: "Home",
	page_id: "home",
	art_work: artWork,
  speakers:speakers
  });
})

module.exports = router;
