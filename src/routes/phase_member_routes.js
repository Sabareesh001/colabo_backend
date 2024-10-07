const express = require('express');
const router = express.Router();
const phaseMembersController = require('../controllers/phase_members_controller')

router.post('/phasemember',phaseMembersController.postPhaseMembers );
// router.put('/phasemember/:id', deleteGoal);
// router.get('/phasemembers/:id', editGoal);
// router.get('/phasemembers');
// router.get('/phasemember/:id')



module.exports = router