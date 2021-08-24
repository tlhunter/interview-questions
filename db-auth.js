// Please fix the bug with this controller code

const database = require('database_connection.js');
const encrypt = require('sha1_encryptor.js');

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  res.authorized = true;
  res.status = 200;

  database.find('users', username, (err, user) => {
    if (err || encrypt(password) !== user.password) {
      res.status = 401;
      res.authorized = false;
    }
  });

  res.send();
});
