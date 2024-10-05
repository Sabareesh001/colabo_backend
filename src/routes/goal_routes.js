const express = require('express');
const router = express.Router();
const {goalsPost} = require('../controllers/goals.controller');

router.post('/goal', goalsPost );


module.exports = router