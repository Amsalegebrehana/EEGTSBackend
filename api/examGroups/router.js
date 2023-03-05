const express = require("express");

const router = express.Router();

const examGroupController = require("./controller");

// Route: /examGroups/
router.route("/").get(examGroupController.getExamGroups);

module.exports = router;