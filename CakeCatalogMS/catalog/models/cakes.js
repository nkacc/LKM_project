const mongoose = require("mongoose")

const cakesSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    cakeid: Number,
}
, { collection: 'cakes' }
)
//mongoose.pluralize(null)

const cakes = mongoose.model(
    'cakes', cakesSchema
)

module.exports = cakes;
