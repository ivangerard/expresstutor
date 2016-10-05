 var express = require('express')
 var mongoose = require('mongoose');
 var app = express()
 var port = process.env.PORT || 8080;

 mongoose.connect('mongodb://localhost/expresstutor')


 app.listen(port);
 console.log('The magic happens on port ' + port);
