// Express
const express = require("express");

// Router
const router = express.Router();

// controller
const examController = require("./controller");

router.route("/").post(examController.createExam);

module.exports = router;