module.exports = function(app) {
  app.get('/*', function (req, res) {
    res.render('index', {});
  });

  app.get('/partials/*', function(req, res) {
    var requestedView = path.join('./', req.url);
    res.render(requestedView, {});
  });
}