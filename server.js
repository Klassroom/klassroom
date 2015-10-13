var express = require('express');
var app = express();
var http  = require('http').createServer(app);
var config = require('./config/config');

http.listen(config.port, function(){
  console.log('running');
});