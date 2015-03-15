var Comment = require('./models/posts');

function temp(res){
	Comment.find(function(err, posts) {
		if (err)
			res.send(err)

		res.json(posts); 
	});
};

//GET endpoint for /api/posts
exports.getPosts = function(req, res){
	Comment.find(function(err, posts) {
			if (err){
				res.send(err);
			}
			res.json(posts); 
		});
	};

//POST endpoint for /api/posts
exports.addPosts = function(req, res){
	Comment.create({
		text : req.body.text,
		username : req.body.username,
		done : false
		}, function(err, posts) {
			if (err){
				res.send(err);
			}
		
			temp(res);
		});
	};
