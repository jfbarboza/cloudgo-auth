'use strict'

var express = require('express');
var router = require('body-parser');
var router = require('./api/router');

var app = express();

app.use(express.static('../public'));

require('./database.js');

app.use('/', express.static('public'));

app.get('/', function (req, res) {
   res.send('CloudGo Auth');
})

app.use('/api', router);

var server = app.listen(8081, function () {

var host = server.address().address
var port = server.address().port

console.log("Example app listening at http://%s:%s", host, port)

})