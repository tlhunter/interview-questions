// Can you spot the bug? How would you fix it?

var database = require('database_connection.js');
var encrypt = require('sha1_encryptor.js');

app.post('/login', function(req, res) { // Triggered by event, could be $('el').click
  var username = req.body.username;
  var password = req.body.password;

  res.authorized = true;
  res.status = 200;

  database.find('users', username, function(err, user) { // Async operation, could be $.ajax
    if (err || encrypt(password) !== user.password) {
      res.status = 401;
      res.authorized = false;
    }
  });

  res.send(); // Sync operation, could be $('el').css('color', 'red');
});
