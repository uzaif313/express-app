var express = require("express");
var router = express.Router();

//Speaker List route
router.get("/speakers",function(req,res){
  var info = '';
  // var dataFile = req.app.get("appData");
  // dataFile.speakers.forEach(function(data){
  //   info +=`
  //     <li>
  //       <h2>${data.name}</h2>
  //       <img src="/images/speakers/${data.shortname}_tn.jpg" alt="speaker"/>
  //       <p>${data.summary}</p>
  //     </li>
  //   `
  // })
  // res.send(`
  //     <link rel="stylesheet" type="text/css" href="css/style.css">
  //     <h1>Ahmedabad Meetup</h1>
  //     ${info}
  //         <script src="/reload/reload.js"></script>

  //     `);
  var data = req.app.get("appData");
  var artWork = []; 
  var speakers = data.speakers;  

  data.speakers.forEach(function(item){
    artWork = artWork.concat(item.artwork);
  });
  
  res.render('speakers',{
  title: "Speaker",
  page_id: "speakerlist",
  art_work: artWork,
  speakers: speakers
  });
})


//Single Speacker
router.get("/speaker/:speaker_id",function(req,res){
  var dataFile = req.app.get("appData");
  
  var speaker = dataFile.speakers[req.params.speaker_id]

  var data = req.app.get("appData");
  var artWork = []; 
  var speakers = data.speakers;  
  var pageSpeaker = []
  data.speakers.forEach(function(item){
    if (item.shortname == req.params.speaker_id) {
      pageSpeaker.push(item);
      artWork = artWork.concat(item.artwork);
    }
  });
  
  res.render('speakers',{
  title: "Speaker info",
  page_id: "speaker",
  art_work: artWork,
  speakers: pageSpeaker
  });

  
})

module.exports = router;
