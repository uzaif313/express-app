var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
  var data = req.app.get("appData");
  var artWork = []; 	
  data.speakers.forEach(function(item){
  	artWork = artWork.concat(item.artwork);
  });
  console.log(1111111111111);
  console.log(artWork);
  console.log(1111111111111)

  res.render('index',{
	title: "Home",
	page_id: "home",
	art_work: artWork
  });
})

module.exports = router;
