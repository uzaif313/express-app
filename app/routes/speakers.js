var express = require("express");
var router = express.Router();

//Speaker List route
router.get("/speakers",function(req,res){
  var info = '';
  var dataFile = req.app.get("appData");
  dataFile.speakers.forEach(function(data){
    info +=`
      <li>
        <h2>${data.name}</h2>
        <img src="/images/speakers/${data.shortname}_tn.jpg" alt="speaker"/>
        <p>${data.summary}</p>
      </li>
    `
  })
  res.send(`
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <h1>Ahmedabad Meetup</h1>
      ${info}
          <script src="/reload/reload.js"></script>

      `);
})


//Single Speacker
router.get("/speaker/:speaker_id",function(req,res){
  var dataFile = req.app.get("appData");
  
  var speaker = dataFile.speakers[req.params.speaker_id]

  res.send(`
      <link rel="stylesheet" type="text/css"  href="/css/style.css">
          <h1>${speaker.title}</h1>
          <h2>with ${speaker.name}</h2>
          <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker"/>
          <p>with ${speaker.summary}</p>
          <script src="/reload/reload.js"></script>

      `);
})

module.exports = router;
