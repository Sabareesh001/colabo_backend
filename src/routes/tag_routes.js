const express = require("express");
const router = express.Router();
const GetController = require("../controllers/roadmaps_controller");
router.get("/roadmap", GetController.getroadmaps)
router.get("/tags", GetController.gettags)

module.exports = router;
