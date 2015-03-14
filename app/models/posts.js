var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var posts = new Schema({
	text : {type : String, default: ''},
	// userId: String
});

module.exports = mongoose.model('posts', posts);