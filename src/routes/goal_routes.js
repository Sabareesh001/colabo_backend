const express = require('express');
const router = express.Router();
const { goalsPost } = require('../controllers/goals_controller');

router.post('/goalpost', goalsPost);


module.exports = router