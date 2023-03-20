var http = require('http');
var path = require('path');
var express = require('express');
var fs = require('fs');

var app = express();
var server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, 'client')));
app.use(express.static(path.resolve(__dirname, 'server\/assets')));

app.get('/api/levels/:id', function (req, res) {
  console.info('[/api/levels/:id]', req.params);
  res.sendFile(path.normalize(__dirname + '/server/levelconfigs/levelconfig-' + req.params.id + '.json'));
});

app.get('/*', function (req, res) {
  console.info('[/*]', req.params);
  res.sendFile('index.html', { root: path.join(__dirname, './client')   });
});

server.listen(process.env.PORT || 8081, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});