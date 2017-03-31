var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var https = require('https')

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));
app.get('/index.html', function(req, res) {
	res.sendFile( __dirname + "/" + "index.html");
});

app.post('/process_post', urlencodedParser, function (req, res){
	var options = { method: 'POST',
		  url: 'https://cloud.p-44.com/api/v2/images/query',
		  headers: 
		   { 'cache-control': 'no-cache',
		     'content-type': 'application/json',
		     'authorization': '[*** CHANGE ME ***]' },
		  body: 
		   { capacityProviderAccountGroup: 
			{ accounts: [ 
				{ code: req.body.scac } ] 
			},
		     	proNumber: req.body.proNumber,
		     	destinationAddress: { postalCode: req.body.zipCode, country: 'US' },
		     	documentType: req.body.docType,
		     	imageFormat: req.body.imgFormat 
		   },
		  json: true };

	console.log(options);

	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		console.log(body);
		
		response = "<html><body><a href='" + body.imageUrl + "'>" + body.imageUrl + "</a><br />" +
			   "<img src=" + body.imageUrl + ">" +
			   "</body><html>";
	//	res.end(JSON.stringify(body));
		res.end(response);
	});
});

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("...listening at http://%s:%s", host, port);
});
