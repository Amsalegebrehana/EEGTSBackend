// Express
const express = require("express");

// Router
const router = express.Router();

// controller
const poolController = require("./controller");


router.route("/").post(poolController.createPool);

router.route("/:id").get(poolController.getPoolById).patch(poolController.updatePool);

router.route("/").get(poolController.getPools);

router.route("/search/:name").get(poolController.getPoolByName);


module.exports = router;