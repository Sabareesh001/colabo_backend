const express = require('express');
const router = express.Router();
const phaseMembersController = require('../controllers/phase_members_controller')

router.post('/phasemembers',phaseMembersController.postPhaseMembers );
router.get('/phasemembers/:phaseId/:phaseMemberId', phaseMembersController.getPhaseMembersById);
router.get('/phasemembers/:phaseId', phaseMembersController.getPhaseMembersByPhaseId);
router.put('/phasemembers',phaseMembersController.modifyPhaseMember);
router.put('/phasemembers/softdelete',phaseMembersController.softDeletePhaseMember);
router.get('/phasemembersByAllocationId/:allocationId',phaseMembersController.getPhaseMembersByAllocationId);


module.exports = router