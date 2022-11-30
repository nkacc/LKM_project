var express = require("express");

const cakes_controller = require("../controllers/cakes");

var router = express.Router();
router.get("/getallcakes", cakes_controller.getallcakes)
router.get("/getcakesbyname/:name", cakes_controller.getcakesbyname)

var getcakesbyprice_router = express.Router()
getcakesbyprice_router.get("/:min/:max", cakes_controller.getcakesbyprice_param)
getcakesbyprice_router.get("/", cakes_controller.getcakesbyprice_query)

router.use("/getcakesbyprice", getcakesbyprice_router)

module.exports = router;
