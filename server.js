var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var env = process.env.NODE_ENV || 'development';
var config = require('./server/config')[env];
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var session = require('express-session')({
  secret: 'fucking in the bushes',
  saveUninitialized: true,
  resave: false
});

var models_dir = __dirname + '/app/models';

fs.readdirSync(models_dir).forEach(function (file) {
  if(file[0] === '.') return; 
  require(models_dir+'/'+ file);
});

require('./server/passport')(passport, config);

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');

mongoose.connect(config.db);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/scripts', express.static(__dirname + '/dist/scripts'));
app.use('/stylesheets', express.static(__dirname + '/dist/stylesheets'));
app.use('/bower', express.static(__dirname + '/dist/bower_components'));
app.use('/images', express.static(__dirname + '/dist/images'));

require('./server/routes')(app, passport);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});