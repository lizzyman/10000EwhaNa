//hellobot
var hellobot = require('./hellobot');
//dicebot
//var dicebot = require('./dicebot');
//gonggangbot
var gonggangbot = require('./gonggang');
//emptyclassbot
var emptyclassbot = require('./emptyclass');
//subwaybot
var subwaybot = require('./subway');

var dicebot = require('./dicebot');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });
//hellobot
app.post('/help', hellobot);
//dicebot
//app.post('/dice', dicebot);
//gonggangbot
app.post('/gonggang', gonggangbot);
//emptyclassbot
app.post('/emptyclass', emptyclassbot);
//subwaybot
app.post('/subway'. subwaybot);
app.post('/dice', dicebot);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});
