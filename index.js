let express = require('express');
let app = express();
let fs = require('fs');
let request = require('request');

app.get('/', function(req,res) {
	app.use(express.static(__dirname + '/static'));
	res.sendfile('static/index.html');
});

let port = process.env.PORT || 5000;
app.listen(port);
console.log('Server works');