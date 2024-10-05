const express = require('express');
const router = express.Router();
const {goalsPost} = require('../controllers/goals.controller');

router.post('/', goalsPost );


module.exports = router