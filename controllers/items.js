var Items = require('../models/items')

module.exports = {
    insert: insert,
    display: display,
    update: update,
    deleteitem: deleteitem
}

function insert(req, res, next) {

    var items = new Items({
        itemcode: req.body.itemcode,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock
    })


    items.save((err) => {
        if (err)
            throw err
        res.json(items)
        console.log(items);
    })

}

function display(req, res) {
    Items.find({}, (err, results) => {
        res.json(results)
    })
}

function update(req, res) {

    //finding a current book
    Items.findOne({
        _id: req.params.id
    }, (err, items) => {
        //update the book
        items.itemcode = req.body.itemcode
        items.name = req.body.name
        items.description = req.body.description
        items.price = req.body.price
        items.stock = req.body.stock

        items.save((err) => {
            if (err)
                throw err;
            res.json(items)
        })
    })
}

function deleteitem(req, res) {
    Items.remove({
        _id: req.params.id
    }, (err, items) => {
        res.json({
            "messages": "File deleted"
        })
    })
}
