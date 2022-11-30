const Cakes = require('../models/cakes');

function getallcakes(req, res) {
    Cakes.find().then(
        docs => res.send(docs)
    )
}

function getcakesbyname() {}

function getcakesbyprice() {}

function getcakesbyprice_param() {}

function getcakesbyprice_query() {}


module.exports = {
    getallcakes,
    getcakesbyname,
    getcakesbyprice
}
