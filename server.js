//requires of external modules
var bodyParser 				= require('body-parser');
var express       			= require('express');
var mongoose      			= require('mongoose');

//requires of internal modules
var configuration 			= require('./server/configuration');
var webapiPublic  			= require('./server/webapi/public');
var webapiPrivateUsers		= require('./server/webapi/private/users');

//connect to the database
mongoose.connect(configuration.DataBase());
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("connected to database");
});

//create global app instance
var app = express();

//configure the application port: use the Heroku port when available
//                                for local tests: use a fixed number 
app.set('port', (configuration.Port()));

//parse JSON info in the body of the request into req.body
app.use(bodyParser.json());

//handle static file request: server them from the 'public' directory
app.use(express.static(__dirname + '/public'));

//add a route for the website root: redirect it to the index page,
//                                  which is the basis of the SPA
app.route('/')
	.get(function (req, res) {
		res.redirect('/index.html');
	});

//add routes for the public web API
app.use('/api/public',  webapiPublic);

//add routes for the private web API
app.use('/api/private/users', webapiPrivateUsers);

//run the server
var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
