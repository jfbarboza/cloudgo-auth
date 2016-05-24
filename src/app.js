var express = require('express');
var app = express();

//MOCKING DATA

var data = require('../mock/apps.json');

app.use(express.static('../public'));

app.get('/', function (req, res) {
   res.send('CloudGo Auth');
})

app.get('/auth/:app_name/', function (req, res) {

   // Prepare output in JSON format
   response = {
       app_name:data,
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

var host = server.address().address
var port = server.address().port

console.log("Example app listening at http://%s:%s", host, port)

})