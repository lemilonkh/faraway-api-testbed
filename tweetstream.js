// tweetstream.js
// (c) 2017 by Milan Gruner
// Based on Socket.io example code

var port = 7426;
var io = require('socket.io')(PORT);
var cfg = require('./config.json');
var TweetStream = require('node-tweet-stream')
var tw = new TweetStream(cfg);

// set up tracked topics
tw.track('dubstep');
tw.track('javascript');
tw.track('edm');
tw.track('bristol');
tw.track('uk');

tw.on('tweet', function(tweet) {
  io.emit('tweet', tweet);
  console.log(' 🐧 ', tweet);
});
