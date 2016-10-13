var http = require('http');
var path = require('path');
var express = require('express');
var fs = require('fs');

var app = express();
var server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, 'client')));
app.use(express.static(path.resolve(__dirname, 'server\/assets')));

app.get('/level/:id', function (req, res) {
  
  var level = fs.readFileSync(__dirname + '/server/levels/level-' + req.params.id + '.json', 'utf8'),
      config = fs.readFileSync(__dirname + '/server/levelconfigs/levelconfig-' + req.params.id + '.json', 'utf8');
  
  res.send({
    level: JSON.parse(level),
    config: JSON.parse(config)
  });
});

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});