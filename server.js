var http = require('http');
var path = require('path');
var express = require('express');
var fs = require('fs');

var app = express();
var server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, 'client')));
app.use(express.static(path.resolve(__dirname, 'server\/assets')));

app.get('/level/:id', function (req, res) {
  res.sendFile(path.normalize(__dirname + '/server/levelconfigs/levelconfig-' + req.params.id + '.json'));
});

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});