'use strict'

var express = require('express');
var User = require('../models/user');

var router = express.Router();

router.get('/users/:user?', function(req, res){
	var user = req.params.user;
	if(!user){
		User.find({}, function(error, users){
		if(error){
			res.status(500).json({message: error.message});
		}
		res.json({users: users});
	});
	}else{
		User.find({'username':user}, function(error, user){
			if(error){
				res.status(500).json({message: error.message});
			}
			res.json({user: user});
		});
	}
});

module.exports = router;