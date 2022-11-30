const Cakes = require('../models/cakes');

function getallcakes(req, res) {
    Cakes.find().then(
        docs => res.send(docs)
    )
}

function getcakesbyname(req, res) {
    Cakes.find({name:req.params.name}).then(
        docs => res.send(docs)
    )
}

function getcakesbyprice(min, max, res) {
    Cakes.find({
        price: {$gte: min, $lte: max}
    }).then(
        docs => res.send(docs)
    )
}

function getcakesbyprice_param(req, res) {
    getcakesbyprice(
        req.params.min,
        req.params.max,
        res
    )
}

function getcakesbyprice_query(req, res) {
    getcakesbyprice(
        req.query.min,
        req.query.max,
        res
    )
}


module.exports = {
    getallcakes,
    getcakesbyname,
    getcakesbyprice_param,
    getcakesbyprice_query
}
