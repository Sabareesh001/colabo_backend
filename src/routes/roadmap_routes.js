const express = require("express");
const router = express.Router();
const GetController = require("../controllers/roadmaps_controller");

router.get("/roadmap", GetController.getroadmaps)

module.exports = router;
