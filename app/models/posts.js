var mongoose = require('mongoose');

module.exports = mongoose.model('posts', {
	text : {type : String, default: ''}
});