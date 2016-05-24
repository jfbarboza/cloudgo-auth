'use strict'

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	confirmed: Boolean
});

var model = mongoose.model('user', userSchema);

module.exports = model;