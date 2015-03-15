var Account = require('./models/accounts');

//POST endpoint for /api/users
exports.postUsers = function(req, res) {
  var user = new Account({
    username: req.body.username,
    password: req.body.password
  });

  user.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'New user added! Welcome to the forum.' });
  });
};

//GET endpoint for /api/users
exports.getUsers = function(req, res) {
  Account.findOne(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
};
