var Comment = require('./models/posts');
// var Account = require('./models/accounts');
// var passport = require('passport');

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

// app.post('/register', function(req, res, next) {
// console.log('registering user');
// Account.register(new Account({ username: req.body.username }), req.body.password, function(err) {
// if (err) { console.log('error while user register!', err); return next(err); }
// console.log('user registered!');
// res.redirect('/');
// });
// });


// app.post('/login', passport.authenticate('local'), function(req, res) {
//   res.json();
//   // res.send({ error: 0, user: user.email }, 201);

// });



//-------------------------------------------------------



// app.get('*', function(req, res) {
// 	res.sendfile('./public/index.html'); 
// });
};