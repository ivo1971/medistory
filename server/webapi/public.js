var express = require('express');
var router = express.Router();

// check that all requests are JSON requests
router.use(function (req, res, next) {
	//TODO
  console.log('public request at time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
