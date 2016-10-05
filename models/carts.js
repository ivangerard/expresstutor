// app/models/user.js
// load the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// define the schema for our user model
var cartSchema = mongoose.Schema({
    member: {
        type: Schema.Types.ObjectId,
        ref: 'customers'
    },
    total: String,
    transactionDate: String,
    itemList: [{
        itemCode: {
            type: Schema.Types.ObjectId,
            ref: 'items'
        },
        qty: Number
    }]
});

// create the model for users and expose it to our app
module.exports = mongoose.model('carts', cartSchema);
