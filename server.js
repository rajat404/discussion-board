var express = require('express');
var app = express(); 								
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var port = process.env.PORT || 3000; 				
var database = require('./config/database'); 			
var morgan = require('morgan');	//shows every request made in the log
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


mongoose.connect(database.url); 	

app.use(express.static(__dirname + '/public')); 		
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride('X-HTTP-Method-Override')); 


// require('./app/routes.js')(app);

// var Account = require('./app/models/accounts');
// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

// passport.serializeUser(function(user, done) {
// done(null, user._id);
// });
// passport.deserializeUser(function(_id, done) {
// User.findById(_id, function (err, user) {
// done(err, user);
// });
// })


var userController = require('./app/user.js');
var authController = require('./app/auth.js');
var postController = require('./app/routes.js');

app.use(passport.initialize());



// require('./app/auth.js')(app);


// app.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     // res.redirect('/users/' + req.user.username);
//     res.json(req.user);
//   });

var router = express.Router();
router.route('/users')
	.post(userController.postUsers)
	.get(userController.getUsers);

router.route('/posts')
	.post(authController.isAuthenticated, postController.addPosts)
	.get(authController.isAuthenticated, postController.getPosts);

app.use('/api', router);

app.listen(port);
console.log("App listening on port " + port);
