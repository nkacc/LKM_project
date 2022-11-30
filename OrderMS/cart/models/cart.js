const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    cakeid: Number,
}
, { collection: 'cart' }
)
//mongoose.pluralize(null)

const cart = mongoose.model(
    'cart', cartSchema
)

module.exports = cart;
