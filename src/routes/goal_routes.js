const express = require('express');
const router = express.Router();
const {goalsPost,getallgoals,getgoalById,deleteGoal,editGoal} = require('../controllers/goals_controller');

router.get('/allgoal', getallgoals);
router.get('/allgoal/:id', getgoalById);

router.post('/creategoal', goalsPost);
router.post('/goal/soft-delete', deleteGoal);
router.post('/editgoal', editGoal);



module.exports = router