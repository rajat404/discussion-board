var express = require('express');
var app = express(); 								
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var port = process.env.PORT || 3000; 				
var database = require('./config/database'); 			
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


mongoose.connect(database.url); 	

app.use(express.static(__dirname + '/public')); 		
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride('X-HTTP-Method-Override')); 

var userController = require('./app/user.js');
var authController = require('./app/auth.js');
var postController = require('./app/routes.js');

app.use(passport.initialize());

var router = express.Router();
router.route('/users')
	.post(userController.postUsers)
	.get(authController.isAuthenticated, userController.getUsers);

router.route('/posts')
	.post(postController.addPosts)
	.get(postController.getPosts);

app.use('/api', router);

app.listen(port);
console.log("App listening on port " + port);
