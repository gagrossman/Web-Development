var express = require('express');
var app = express();
console.log('Server is running on port 8000');

// app.get('/', function(req, res){
// 	res.send("hølow b∑rß ™");
// });

app.use(function(req, res, next) {
	console.log(req.ip);
	console.log(new Date());
	next();
})

app.use(function(req, res, next){
	express.statid("public");
})

app.listen(3000); 