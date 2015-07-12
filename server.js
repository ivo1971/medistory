//requires
var express      = require('express');
var pg           = require('pg');
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



pg.connect("postgres://eownbaptogawyg:BHrnxBW1zlh890zBf-9HgK-vNg@ec2-107-22-175-206.compute-1.amazonaws.com:5432/de3pjesrssbrd8", function(err, client) {
  console.log('DB connection');
  console.log(err);
		
  //var query = client.query('CREATE TABLE Users (Name char(50))');

  var query = client.query("SELECT * FROM information_schema.tables WHERE table_schema = 'public'");
  //var query = client.query('SELECT * FROM Users');
  query.on('row', function(row) {
    console.log(JSON.stringify(row));
  });

  var query1 = client.query('INSERT INTO users VALUES (Ivo)');
  //var query2 = client.query('INSERT INTO Users (Name) VALUES (Rina)');

  var query3 = client.query('SELECT * FROM Users');
  query3.on('row', function(row) {
    console.log(JSON.stringify(row));
  });
});
