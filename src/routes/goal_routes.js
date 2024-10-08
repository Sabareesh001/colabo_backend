const express = require('express');
const router = express.Router();
const {
    goalsPost,
    getallgoals,
    getgoalById,
    deleteGoal,
    editGoal,
} = require('../controllers/goals_controller');

// OpenAPI Schemas



// API Routes and OpenAPI Documentation

/**
 * @openapi
 * /allgoal:
 *  get:
 *    tags:
 *    - Goals
 *    summary: To get all goals
 *    responses:
 *      200:
 *        description: Data Successfully extracted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/goalResponseallSchema'
 *      403:
 *        description: Internal Server Error
 */
router.get('/allgoal', getallgoals);

/**
 * @openapi
 * /allgoal/{id}:
 *  get:
 *    tags:
 *    - Goals
 *    summary: To get goal by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Data Successfully extracted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/schemas/goalResponsebyidSchema'
 *      403:
 *        description: Internal Server Error
 */
router.get('/allgoal/:id', getgoalById);

/**
 * @openapi
 * /creategoal:
 *  post:
 *    tags:
 *    - Goals
 *    summary: Create a goal
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/createGoalRequestSchema'
 *    responses:
 *      200:
 *        description: Goal created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/goaladdresponse'
 *      403:
 *        description: Error creating goal
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/goaladd404'
 */
router.post('/creategoal', goalsPost);

/**
 * @openapi
 * /goal/soft-delete:
 *  put:
 *    tags:
 *    - Goals
 *    summary: Soft delete a goal
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/goaldeleterequest'
 *    responses:
 *      200:
 *        description: Goal deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/goaldeleteresponse'
 *      403:
 *        description: Error deleting goal
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/goaldeleteresponse404'
 */
router.put('/goal/soft-delete', deleteGoal);

/**
 * @openapi
 * /editgoal:
 *  put:
 *    tags:
 *    - Goals
 *    summary: Update a goal
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/goalupdaterequest'
 *    responses:
 *      200:
 *        description: Goal updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/goalupdateresponse'
 *      403:
 *        description: Error updating goal
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/goalupdateresponse404'
 */
router.put('/editgoal', editGoal);

module.exports = router;
