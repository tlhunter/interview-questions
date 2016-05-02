var r = require("redis"),
		redis = r.createClient();
var express = require('express'),
		app = express();

// TODO: Add redis methods to each route handler
// TODO: Add error handling

/**
 * Increment user counter in Redis
 * Send an object containing greeting: "Hello World", and count: COUNT VALUE
 * Increment the count value by one
 */
app.get('/', function(req, res) {});

/**
 * Return object containing count: COUNT VALUE
 */
app.get('/count', function(req, res) {});

/**
 * Manually set the value of the user count, and return object containing status: 'OK'
 */
app.get('/cheat/:count', function(req, res) {
	// req.params.count;
});

app.listen(5000, function () {
  console.log('listening...');
});

// res.status(200).send();		// Send data back to client
// redis.set(NAME, VALUE, CB) // Set Value
// redis.get(NAME, CB)				// Get Value
// redis.incr(NAME, CB)				// Increment Value by one
