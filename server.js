'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config/config.js');
var passport = require('passport');
var flash = require('connect-flash');

app.use('/scripts', express.static(__dirname + '/dist/scripts'));
app.use('/stylesheets', express.static(__dirname + '/dist/stylesheets'));
app.use('/images', express.static(__dirname + '/dist/images'));
app.use('/bower', express.static(__dirname + '/bower_components'));

mongoose.connect(config.db);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'fucking in the bushes',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('views', __dirname + '/client/views/');
app.set('view engine', 'jade');

require('./config/routes.js')(app, passport);
require('./config/passport.js')(passport);

app.listen(config.port, function() {
  console.log(config.port);
});