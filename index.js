const express = require('express');
var request = require('request');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/search/quote', function(req,res) {
	var query = req.query.query;
  var newurl = 'https://api.tronalddump.io/search/quote?query=' + query;
  request(newurl).pipe(res);
});


app.listen(3000, () => {
  console.log('Listening on: http://localhost:3000');
});