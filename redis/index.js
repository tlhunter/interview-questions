// TODO: Add redis methods to each route handler
// TODO: Add error handling

var Redis = require("redis");
var express = require('express');

var redis = Redis.createClient();
var app = express();

var REDIS_KEY = 'visit-counter';

/**
 * If no value is returned, default to 0
 * Send an object containing {count: COUNT_VALUE}
 */
app.get('/count', (req, res) => {
});

/**
 * Manually set the value of the user count
 * Send an object containing {status: 'OK'}
 */
app.get('/cheat/:count', (req, res) => {
  // req.params.count;
});

/**
 * Increment user counter in Redis
 * Send an object containing {greeting: "Hello World", count: COUNT_VALUE}
 */
app.get('/', (req, res) => {
});

app.listen(5000, function () {
  console.log('listening...');
});

// NOTES:
// res.status(200).send();               // Sends data back to client
// redis.set(REDIS_KEY, VALUE, CB)       // Set Value, CB(err)
// redis.get(REDIS_KEY, CB)              // Get Value CB(err, val)
// redis.incr(REDIS_KEY, CB)             // Increment Value by one CB(err, newVal)
