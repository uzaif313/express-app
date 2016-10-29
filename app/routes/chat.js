var express = require("express");
var router = express.Router();
router.get("/chat",function(req,res){
  res.render('chat',{
	title: "Chat",
	page_id: "chat"
  });
})

module.exports = router;
