var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var passportLocalMongoose = require('passport-local-mongoose');


var Account = new Schema({
    email: String,
    password: String
});

Account.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameUnique: true
});

module.exports = mongoose.model('Account', Account);