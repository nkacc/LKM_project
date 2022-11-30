var express = require("express");

const cart_controller = require("../controllers/cart");

var router = express.Router();
router.post("/add", cart_controller.add);
router.get("/display", cart_controller.display);
router.get("/checkout", cart_controller.checkout);

module.exports = router;
