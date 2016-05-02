var r = require("redis"),
		redis = r.createClient();
var express = require('express'),
		app = express();
var REDIS_COLLECTION = 'visit-counter';

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

// NOTES:
// res.status(200).send();								// Sends data back to client
// redis.set(REDIS_COLLECTION, VALUE, CB) // Set Value, CB(err)
// redis.get(REDIS_COLLECTION, CB)				// Get Value CB(err, val)
// redis.incr(REDIS_COLLECTION, CB)				// Increment Value by one CB(err, newVal)
