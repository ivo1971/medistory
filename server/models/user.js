// Import the Mongoose module.
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// Set the data types, properties and default values to our schema.
var userSchema = new Schema({
	name: 			{ type: String, default: '' },
	password:		{ type: String, default: '' },
	address:		{ type: String, default: '' },
	postalCode:		{ type: String, default: '' },
	city:			{ type: String, default: '' },
	createdOn:		{ type: Date, 	default: Date.now},
	changedOn:		{ type: Date, 	default: Date.now}
});

//Export the user schema
module.exports = mongoose.model('User', userSchema);
