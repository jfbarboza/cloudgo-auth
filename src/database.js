'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cloudgo-auth', function(error){
	if(error){
		console.log('There was an error connecting to the DB');
	}else{
		console.log('You are connected to the CloudGo-Auth DB');
	}
});