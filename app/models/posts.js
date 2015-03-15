var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var posts = new Schema({
	text : {type : String, default: ''},
	username : String
});

module.exports = mongoose.model('posts', posts);