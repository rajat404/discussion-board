var Comment = require('./models/posts');

function getPosts(res){
	Comment.find(function(err, posts) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(posts); // return all posts in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all posts
	app.get('/api/posts', function(req, res) {

		// use mongoose to get all posts in the database
		getPosts(res);
	});

	// create posts and send back all posts after creation
	app.post('/api/posts', function(req, res) {

		// create a posts, information comes from AJAX request from Angular
		Comment.create({
			text : req.body.text,
			done : false
		}, function(err, posts) {
			if (err)
				res.send(err);

			// get and return all the posts after you create another
			getPosts(res);
		});

	});

	// delete a posts
	// app.delete('/api/posts/:todo_id', function(req, res) {
	// 	Comment.remove({
	// 		_id : req.params.todo_id
	// 	}, function(err, posts) {
	// 		if (err)
	// 			res.send(err);

	// 		getPosts(res);
	// 	});
	// });

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};