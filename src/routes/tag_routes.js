const express = require("express");
const { gettags, createtags } = require("../controllers/tags_controller");
const router = express.Router();
router.get("/gettags", gettags)
router.post("/addtags", createtags)
module.exports = router;
