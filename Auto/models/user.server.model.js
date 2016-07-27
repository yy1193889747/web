var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	uid: Number,
	name: String,
	age: Number,
	creatTime: Date,
	lastTime: Date

});

mongoose.model('User', UserSchema);