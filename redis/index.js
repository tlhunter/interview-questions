var r = require("redis"),
		redis = r.createClient();
var express = require('express'),
		app = express();

// TODO: Add redis methods to each route handler
// TODO: Add error handling

// Send hello message, increment counter, and count of visitors
app.get('/', function(req, res) {});

// Get count of all visitors
app.get('/count', function(req, res) {});

// Manually set value
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
