var express = require("express");
var router = express.Router();
router.get("/feedback",function(req,res){
  res.render('feedback',{
	title: "feedback",
	page_id: "feedback"
  });
})

module.exports = router;
