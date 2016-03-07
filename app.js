var express = require('express');
var fs = require('fs');
var md = require('markdown').markdown;
var rm = require('remarkable');
rm = new rm();

var app = express();

app.use(express.static('public'));

app.get('/wiki', function(req, res){
  fs.readdir('./wiki', function(err, files){
    if(!err) {
      res.json({err: null, data: files});
    }
    else {
      res.json({err: err, data: null});
    }
  });
});

app.get('/file/:fileId?', function(req, res){
  if(typeof req.params.fileId !== "undefined"){
    fs.stat("./wiki", function(err, stats) {
      if(!err) {
        fs.readFile('./wiki/'+req.params.fileId, 'utf8',  function(err, data) {
          if(!err) {
            //res.json(md.toHTML(data));
            res.json(rm.render(data));
          }
          else {
            console.error(err);
            console.error(req.params.fileId + " : file does not exist or is inaccessible");
            res.send(req.params.fileId + " : file does not exist or is inaccessible");
          }
        })
      }
      else {
        console.error(err);
        console.error("wiki directory does not exist or is inaccessible");
        res.send("wiki directory does not exist or is inaccessible");
      }
    })
  }
  else {
    console.log("No File Received");
    res.send("No File Received");
  }
});

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

