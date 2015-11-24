var express = require('express');
var app = express(); // instantiates Express
var path = require('path');
var showAccountBalance = require('./modules/showAccountBalance.js');


//app.route('/', 'index.html');

app.get('/', function(req,res,next){ 
   res.sendFile(path.join(__dirname, './index.html'));
});

app.use('/static', express.static('/static'));

app.get('/balance', function(req, res, next) {
  res.send(showAccountBalance());
});




var server = app.listen(process.env.PORT || 3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});




/*
send html file example

app.get('/', function(req,res,next){ 
   res.sendFile(path.join(__dirname, './index.html'));
});

*/