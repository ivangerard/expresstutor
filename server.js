 var express = require('express')
 var mongoose = require('mongoose');
 var bodyParser = require('body-parser');
 var app = express()
 var port = process.env.PORT || 8080;

 mongoose.connect('mongodb://localhost/expresstutor')

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({
     extended: true
 }))
 app.use('/api', require('./routes/api'))

 app.listen(port);
 console.log('The magic happens on port ' + port);
