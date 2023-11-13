const express = require("express");
const router = express.Router();

const { getConsumption } = require("../api/comparisonApi");

router.route("/").get(getConsumption);

module.exports = router;
