const express = require("express");
const router = express.Router();
const GoalMembersController = require("../controllers/goal_members_controller");

router.get("/goalmembers", GoalMembersController.ExistingMembers)

module.exports = router;
