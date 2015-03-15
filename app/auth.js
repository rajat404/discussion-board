var passport = require('passport');
// var BasicStrategy = require('passport-http').BasicStrategy;
var LocalStrategy = require('passport-local').Strategy;
var Account = require('./models/accounts');

passport.use(new LocalStrategy(
	function(username, password, callback) {
		Account.findOne({ username: username }, function (err, user) {
			if (err) { return callback(err); }

			// No user found with that username
			if (!user) { return callback(null, false); }

			// Make sure the password is correct
			user.verifyPassword(password, function(err, isMatch) {
			if (err) { return callback(err); }

			// Password did not match
			if (!isMatch) { return callback(null, false); }

			// Success
			// passport.serializeUser(Account.serializeUser());
			// passport.deserializeUser(Account.deserializeUser());
			return callback(null, user);
			});
		});
	}
));



exports.isAuthenticated = passport.authenticate('local', { session : false });