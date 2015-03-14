var express  = require('express');
var app      = express(); 								
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;var port  	 = process.env.PORT || 3000; 				
var database = require('./config/database'); 			
var morgan   = require('morgan');	//shows every request made in the log
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


mongoose.connect(database.url); 	

app.use(express.static(__dirname + '/public')); 		
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride('X-HTTP-Method-Override')); 


require('./app/routes.js')(app);

var Account = require('./app/models/accounts');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.listen(port);
console.log("App listening on port " + port);
