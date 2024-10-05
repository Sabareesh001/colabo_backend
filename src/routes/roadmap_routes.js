const express = require("express");
const { getroadmaps } = require("../controllers/roadmaps_controller");
const router = express.Router();


router.get("/getroadmap", getroadmaps)


module.exports = router;
