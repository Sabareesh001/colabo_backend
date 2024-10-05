const express = require("express");
const { gettags } = require("../controllers/tags_controller");
const router = express.Router();
router.get("/tags", gettags)

module.exports = router;
