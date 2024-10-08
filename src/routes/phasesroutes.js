const express = require("express");
const router = express.Router();
const PhaseController = require("../controllers/phase_controller");
/**
 * @openapi
 * /allphases:
 *  get:
 *    tags:
 *    - Phase
 *    summary: To get all phase
 *    responses:
 *      200:
 *        description: Data Successfully extracted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/phasegetResponse'
 *      404:
 *        description: Phases not found
 *      500:
 *        description: Internal Server Error fetching phase
 */
router.get('/allphases', PhaseController.GetAllphases);
/**
 * @openapi
 * /phaseget/:id:
 *  get:
 *    tags:
 *    - Phase
 *    summary: To get all particular phase
 *    responses:
 *      200:
 *        description: Data Successfully extracted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/phasegetResponse'
 *      404:
 *        description: Phase not found in phase id
 *      500:
 *        description: Internal Server Error fetching phase by id
 */
router.get('/phaseget/:id', PhaseController.GetPhase);
/**
 * @openapi
 * /phasebygoal/:id:
 *  get:
 *    tags:
 *    - Phase
 *    summary: To get all particular phase by goal
 *    responses:
 *      200:
 *        description: Data Successfully extracted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/phasegetbyidResponse'
 *      404:
 *        description: Phase not found for this goal_id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/phasegetbygoalResponse404'
 *      500:
 *        description: Internal Server Error fetching phase by goal_id
 */
router.get('/phasebygoal/:id', PhaseController.GetPhaseByGoal);

/**
 * @openapi
 * /phaseinsert:
 *  post:
 *    tags:
 *    - Phase
 *    summary: create add members in goal
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/phaseinsertRequest'
 *    responses:
 *      200:
 *        description: user data created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/phaseinsertResponse'
 *      404:
 *        description: User already exists or Missing Arguments
 */
router.post("/phaseinsert", PhaseController.AddPhases);

/**
 * @openapi
 * /delete/:id:
 *  put:
 *    tags:
 *    - Phase
 *    summary: remove members in goal
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/deletedphaserequest'
 *    responses:
 *      200:
 *        description: user data created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/deletedphaseResponse'
 *      404:
 *        description: Phase not found for this goal_id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/deletedphaseResponse404'
 *      500:
 *        description: Internal Server Error
 */
router.put('/delete/:id', PhaseController.PhaseDelete);

module.exports = router;
