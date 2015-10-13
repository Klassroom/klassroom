var localStrategy = require('passport-local').Strategy;
var User = require('../config/models/user');

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (error, user) {
      done(error, user);
    });
  });

  passport.use('local-signup', new localStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    }, function (req, email, password, done) {
      process.nextTick(function() {
        User.findOne({
          'local.username': email
        }, function (error, user) {
          if(error) {
            return done(error);
          }

          if(user) {
            return done(null, false, req.flash('signupMessage', 'That email arealdy taken.'))
          } else {
            var newUser = new User();

            newUser.local.username = email;
            newUser.local.password = password;

            newUser.save(function (error) {
              if(error) {
                throw error;
              }

              return done(null, newUser);
            });
          }
        })
      });
    }
  ))
}