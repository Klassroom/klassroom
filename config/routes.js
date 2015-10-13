var User = require('./models/user');

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/signup', function (req, res) {
    res.render('signup', {
      message: 'Victory'
    });
  });

  app.post('/signup', function (req, res) {
    var newUser = new User();

    newUser.local.username = req.body.email;
    newUser.local.password = req.body.password;

    newUser.save(function (error) {
      if(error) {
        throw error;
      }
    });

    res.redirect('/');
  });
}