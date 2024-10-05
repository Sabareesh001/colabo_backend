const express = require("express");
const router = express.Router();
const MemberController = require("../controllers/goal_members_controller");

router.get("/goalmembers", MemberController.Members);

module.exports = router;
