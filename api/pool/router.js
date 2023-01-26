// Express
const express = require("express");

// Router
const router = express.Router();

// controller
const poolController = require("./controller");

router.route("/").post(poolController.createPool);
 
router.route("/:name").get(poolController.getPoolByName);

module.exports = router;