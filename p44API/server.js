var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var https = require('https')

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());

app.use(express.static('public'));
app.get('/index.html', function(req, res) {
	res.sendFile( __dirname + "/" + "index.html");
});

app.all('/getImage', function(req, res, next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	next();
});

app.post('/getImage', urlencodedParser, function (req, res){

	var body = req.body;

	var options = { method: 'POST',
		  url: 'https://cloud.p-44.com/api/v2/images/query',
		  headers: 
		   { 'cache-control': 'no-cache',
		     'content-type': 'application/json',
		     'authorization': req.headers.authorization },
		  body: body,
		  json: true };

	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		res.end(JSON.stringify(body));
	});
});

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("...listening at http://%s:%s", host, port);
});
