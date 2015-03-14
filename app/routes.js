var Comment = require('./models/posts');

function getPosts(res){
	Comment.find(function(err, posts) {

			if (err)
				res.send(err)

			res.json(posts); 
		});
};

module.exports = function(app) {
	
	app.get('/api/posts', function(req, res) {
		getPosts(res);
	});
	
	app.post('/api/posts', function(req, res) {

		Comment.create({
			text : req.body.text,
			done : false
		}, function(err, posts) {
			if (err)
				res.send(err);
		
			getPosts(res);
		});

	});

	
	
	
	
	
	
	

	
	
	

	
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
};