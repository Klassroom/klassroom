var User = require('./models/user');

module.exports = function(app, passport) {
  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/signup', function (req, res) {
    res.render('signup', {
      message: req.flash('signupMessage')
    });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }));
}