const express = require("express");
const router = express.Router();
const GetController = require("../controllers/getcontroller");
router.get("/roadmap", GetController.getroadmaps)
// router.get("/", GetController.);

module.exports = router;
