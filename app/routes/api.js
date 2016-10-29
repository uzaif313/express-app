var express = require("express");
var router = express.Router();
var feedback = require("../data/feedback.json");
var fs = require("fs");
var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}))


router.get("/api/feedback",function(req,res){
	res.json(feedback);
});


router.post("/api/feedback",function(req,res){
	feedback.unshift(req.body);
	fs.writeFile('app/data/feedback.json',JSON.stringify(feedback),'utf8',function(err){
		if (err) {
			console.log(err);
		}
	})
	res.json(feedback);
});


router.delete("/api/feedback/:id",function(req,res){
	feedback.splice(req.params.id,1);
	fs.writeFile('app/data/feedback.json',JSON.stringify(feedback),'utf8',function(err){
		if (err) {
			console.log(err);
		}
		
	})
	res.json(feedback);
});


module.exports = router;
