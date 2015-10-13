var mongoose = require('mongoose');
var Schema = mongoose.Schema({
  local: {
    username: String,
    password: String
  }
});

module.exports = mongoose.model('User', Schema);