// index.js
// (c) 2017 by Milan Gruner
// Based on Socket.io example code

// constants
var PORT = 1337;

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
  res.send('<h1>H🕉️ll🌍 W🌐rld!</h1>');
});

http.listen(PORT, function() {
	console.log('🌐 Listening on *:'+PORT);
})
