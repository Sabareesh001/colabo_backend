const express = require('express');
const router = express.Router();
const phaseMembersController = require('../controllers/phase_members_controller');

/**
 * @openapi
 * /phasemembers:
 *   post:
 *     tags:
 *       - Phase Members
 *     summary: Add new phase members
 *     description: Adds new members to a phase. Each member must have a phase_id and member_id.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 phase_id:
 *                   type: integer
 *                   example: 1
 *                 member_id:
 *                   type: integer
 *                   example: 100
 *     responses:
 *       200:
 *         description: Phase members added successfully.
 *       400:
 *         description: Invalid request, missing member details or member already exists.
 *       500:
 *         description: Unexpected error.
 */
router.post('/phasemembers', phaseMembersController.postPhaseMembers);

/**
 * @openapi
 * /phasemembers/{phaseId}/{phaseMemberId}:
 *   get:
 *     tags:
 *       - Phase Members
 *     summary: Get phase member by phase ID and member ID
 *     description: Retrieves a specific phase member based on phase ID and member ID.
 *     parameters:
 *       - name: phaseId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the phase
 *       - name: phaseMemberId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the phase member
 *     responses:
 *       200:
 *         description: Phase member retrieved successfully.
 *       404:
 *         description: No records found.
 *       500:
 *         description: Unexpected error.
 */
router.get('/phasemembers/:phaseId/:phaseMemberId', phaseMembersController.getPhaseMembersById);

/**
 * @openapi
 * /phasemembers/{phaseId}:
 *   get:
 *     tags:
 *       - Phase Members
 *     summary: Get phase members by phase ID
 *     description: Retrieves all active members in a specific phase.
 *     parameters:
 *       - name: phaseId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the phase
 *     responses:
 *       200:
 *         description: List of phase members.
 *       404:
 *         description: No records found.
 *       500:
 *         description: Unexpected error.
 */
router.get('/phasemembers/:phaseId', phaseMembersController.getPhaseMembersByPhaseId);

/**
 * @openapi
 * /phasemembers:
 *   put:
 *     tags:
 *       - Phase Members
 *     summary: Modify phase member details
 *     description: Updates the details of a phase member by allocation ID or by phase and member ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               allocationId:
 *                 type: integer
 *                 example: 10
 *               phaseId:
 *                 type: integer
 *                 example: 1
 *               phaseMemberId:
 *                 type: integer
 *                 example: 100
 *               data:
 *                 type: object
 *                 description: The data to be updated.
 *     responses:
 *       200:
 *         description: Phase member updated successfully.
 *       400:
 *         description: Invalid request or IDs.
 *       404:
 *         description: No records found.
 *       500:
 *         description: Unexpected error.
 */
router.put('/phasemembers', phaseMembersController.modifyPhaseMember);

/**
 * @openapi
 * /phasemembers/softdelete:
 *   put:
 *     tags:
 *       - Phase Members
 *     summary: Soft delete a phase member
 *     description: Soft deletes a phase member by allocation ID or by phase and member ID. Marks them as inactive and records the deletion details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               allocationId:
 *                 type: integer
 *                 example: 10
 *               phaseId:
 *                 type: integer
 *                 example: 1
 *               phaseMemberId:
 *                 type: integer
 *                 example: 100
 *               userId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Phase member soft deleted successfully.
 *       400:
 *         description: Missing user ID or invalid IDs.
 *       404:
 *         description: No records found.
 *       500:
 *         description: Unexpected error.
 */
router.put('/phasemembers/softdelete', phaseMembersController.softDeletePhaseMember);

/**
 * @openapi
 * /phasemembersByAllocationId/{allocationId}:
 *   get:
 *     tags:
 *       - Phase Members
 *     summary: Get phase members by allocation ID
 *     description: Retrieves all phase members for a specific allocation ID.
 *     parameters:
 *       - name: allocationId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The allocation ID
 *     responses:
 *       200:
 *         description: List of phase members.
 *       404:
 *         description: No records found.
 *       500:
 *         description: Unexpected error.
 */
router.get('/phasemembersByAllocationId/:allocationId', phaseMembersController.getPhaseMembersByAllocationId);

module.exports = router;
