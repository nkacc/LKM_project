var express = require("express");

const cakes_controller = require("../controllers/cakes");

var router = express.Router();
router.get("/", cakes_controller.getallcakes);


module.exports = router;
