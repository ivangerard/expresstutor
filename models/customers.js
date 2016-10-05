// app/models/user.js
// load the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// define the schema for our user model
var customerSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    memberId: String,
    address: String,
    zip: String,
    phone: String

});


// create the model for users and expose it to our app
module.exports = mongoose.model('customers', cartSchema);
