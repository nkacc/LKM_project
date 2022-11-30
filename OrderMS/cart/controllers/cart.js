const Cart = require("../models/cart");

function add(req, res) {
    console.log(req.body)
    let cart = new Cart({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        cakeid: req.body.cakeid
    })
    cart.save().then(
        (d) => res.send(`Added ${req.body.name} to cart.`)
    )
}

function display(req, res) {
    Cart.find().then(
        docs => res.send(docs)
    )
}

function checkout(req, res) {
    Cart.deleteMany().then(
        (docs) => {
            if (docs.deletedCount == 0) {
                res.send("Cart is Empty") 
            } else {
                res.send("Order placed")
            }
        }
    )

}


module.exports = {
    add,
    display,
    checkout
}
