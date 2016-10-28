var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
  res.send(`<h1>Welcome to Community</h1>
  			<img src="/images/misc/background.jpg" alt="back" style="height:300px;">
  			<h1>Test Hot reload</h1>
  			<script src="/reload/reload.js"></script>
  		  `);
})

module.exports = router;
