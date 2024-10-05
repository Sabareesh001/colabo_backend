const express = require('express');
const { getalluser, getalluserstats, getalluserrole } = require('../controllers/user_controller');
const router = express.Router();
router.get("/getalluser", getalluser)
router.get("/getalluserstats", getalluserstats)
router.get("/getalluserrole", getalluserrole)


module.exports = router