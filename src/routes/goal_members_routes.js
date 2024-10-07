const express = require("express");
const router = express.Router();
const { getMembers, addmembers, removemember, updatemembers } = require("../controllers/goal_members_controller");

router.get("/:id/getallgoalmembers", getMembers);
router.post("/:id/addgoalmembers", addmembers)
router.put("/:id/updatemembers", updatemembers)
router.put("/:id/removegoalmembers", removemember)

module.exports = router;
