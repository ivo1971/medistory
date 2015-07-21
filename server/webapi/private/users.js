var express 	= require('express');
var middleware	= require('./../middleware');
var userSchema 	= require('./../../models/user');

var router = express.Router();

//defining the Routes for the users API
// Start the Router
var router = express.Router();

//use no-cache middleware
router.use(middleware.MiddleWareNoCache);

//get a list of all users
router.get('/', function(req, res) {
	userSchema.find(function(err, users) {
		if (err) {
			res.send(err);
		} else {
			res.json(users);
		}
	});
});

//route to add a user
router.post('/', function(req, res) {
	// create a new instance of the user model
	var user = new userSchema();

	// set the users properties (comes from the request)
	user.name 		= req.body.name;
	user.password	= req.body.password; 
	user.address	= req.body.address;
	user.postalCode	= req.body.postalCode;
	user.city		= req.body.city;

	// save the data received
	user.save(function(err) {
		if (err) {
			res.send(err);
		} else {
			// give some success message
			res.json({ message: 'user successfully created!'});
		}
	});
})

//export the users router
module.exports = router;
