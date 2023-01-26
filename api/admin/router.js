// Express
const express = require("express");

// Router
const router = express.Router();

// controller
const adminController = require("./controller");

router.route("/").post(adminController.createAdmin).get(adminController.getAllAdmin);
router.route("/login").post(adminController.adminLogin);

module.exports = router;