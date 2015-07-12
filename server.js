//requires
var express      = require('express');
var webapiNoAuth = require('./webapiNoAuth');

//create global app instance
var app = express();

//configure the application port: use the Heroku port when available
//                                for local tests: use a fixed number 
app.set('port', (process.env.PORT || 8080));

//handle static file request: server them from the 'static' directory
app.use(express.static(__dirname + '/static'));

//add a route for the website root: redirect it to the index page,
//                                  which is the basis of the SPA
app.route('/')
	.get(function (req, res) {
		res.redirect('/index.html');
	});

//add a route for the unauthenticated web API
app.use('/apiNoAuth', webapiNoAuth);

//run the server
var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
