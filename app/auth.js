var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Account = require('./models/accounts');

passport.use(new LocalStrategy(
	function(username, password, callback) {
		Account.findOne({ username: username }, function (err, user) {
			if (err) { 
				return callback(err); 
			}

			if (!user) { 
				return callback(null, false); 
			}

			user.verifyPassword(password, function(err, isMatch) {
				if (err) { 
					return callback(err); 
				}

				if (!isMatch) { 
					return callback(null, false); 
				}

				return callback(null, user);
			});
		});
	}
));

exports.isAuthenticated = passport.authenticate('local', { session : false });