const express = require("express");
const { gettags } = require("../controllers/tags_controller");
const router = express.Router();
router.get("/gettags", gettags)

module.exports = router;
