var Comment = require('./models/posts');
// var Account = require('./models/accounts');
// var passport = require('passport');

// function getPosts(res){
// 	Comment.find(function(err, posts) {

// 			if (err)
// 				res.send(err)

// 			res.json(posts); 
// 		});
// };

// module.exports = function(app) {
	
// 	app.get('/api/posts', function(req, res) {
// 		getPosts(res);
// 	});
	
// 	app.post('/api/posts', function(req, res) {

// 		Comment.create({
// 			text : req.body.text,
// 			// userId = req.user._id,
// 			done : false
// 		}, function(err, posts) {
// 			if (err)
// 				res.send(err);
		
// 			getPosts(res);
// 		});

// 	});


// };
exports.getPosts = function(req, res){
	Comment.find(function(err, posts) {
			if (err)
				res.send(err)

			res.json(posts); 
		});
	};


exports.addPosts = function(req, res){
	Comment.create({
		text : req.body.text,
		// userId = req.user._id,
		done : false
		}, function(err, posts) {
			if (err)
				res.send(err);
		
			getPosts(res);
		});
	};

// module.exports = function(app) {
	
// 	app.get('/api/posts', function(req, res) {
// 		getPosts(res);
// 	});
	
// 	app.post('/api/posts', function(req, res) {

// 		Comment.create({
// 			text : req.body.text,
// 			// userId = req.user._id,
// 			done : false
// 		}, function(err, posts) {
// 			if (err)
// 				res.send(err);
		
// 			getPosts(res);
// 		});

// 	});


// };