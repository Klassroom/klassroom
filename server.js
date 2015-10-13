var express = require('express');
var app = express();
var http  = require('http').createServer(app);

app.set('views', __dirname + '/client/views/');
app.set('view engine', 'jade');


http.listen(3000, function(){
  console.log('running');
});