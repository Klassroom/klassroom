var express = require('express');
var app = express();
var http  = require('http').createServer(app);

app.set('views', __dirname + '/client/views/');
app.set('view engine', 'jade');

app.use('/scripts', express.static(__dirname + '/dist/scripts'));
app.use('/stylesheets', express.static(__dirname + '/dist/stylesheets'));
app.use('/images', express.static(__dirname + '/dist/images'));
app.use('/bower', express.static(__dirname + '/bower_components'));

require('./config/routes')(app);

http.listen(3000, function(){
  console.log('running, 3000');
});