var express = require('express');
var app = express();

app.get('/now', function(req, res, next) {
    req.time = new Date().toString(); // Hypothetical synchronous operation
    next();
    }, function(req, res) {
    res.send({time: req.time});
    });
console.log('Hello World')


































 module.exports = app;
