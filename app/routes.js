var Comment = require('./models/posts');
var Account = require('./models/accounts');
var passport = require('passport');

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

	

//--------------------------------------------------
// app.get('/register', function(req, res) {
//   console.log("pos1");
//   res.sendfile('./public/views/signup.html');
// });

app.post('/register', function(req, res) {
	console.log("req.body");
	console.log(req.body);
Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
        return res.json({ account : account });
    }

    passport.authenticate('local')(req, res, function () {
      res.json({ account : account });
    });
});
});

// app.get('/login', function(req, res) {
//   res.json());
// });

app.post('/login', passport.authenticate('local'), function(req, res) {
  res.json();
});

// app.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });

// app.get('/ping', function(req, res){
//   res.send("pong!", 200);
// });

//-------------------------------------------------------





	
	
	
	
	

	
	
	

	
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
};