var Comment = require('./models/posts');

exports.getPosts = function(req, res){
	Comment.find(function(err, posts) {
			if (err)
				res.send(err);

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
		
			exports.getPosts(res);
		});
	};

