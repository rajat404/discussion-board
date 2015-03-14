var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var posts = new Schema({
	text : {type : String, default: ''}
});

module.exports = mongoose.model('posts', posts);