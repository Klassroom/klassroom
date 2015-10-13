var User = require('./models/user');

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index.jade');
  });

  app.get('/:username/:password', function (req, res) {
    var newUser = new User();

    newUser.local.username = req.params.username;
    newUser.local.password = req.params.password;

    console.log(newUser.local.username + ' ' + newUser.local.password);

    newUser.save(function (error) {
      if(error) {
        throw error;
      }
    });

    res.send('Success');
  })
}