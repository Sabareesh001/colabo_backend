const express = require("express");
const router = express.Router();
const { getMembers, addmembers, removemember, updatemembers } = require("../controllers/goal_members_controller");
/**
 * @openapi
 * /:id/getallgoalmembers:
 *  get:
 *    tags:
 *    - Goal Members
 *    summary: To get all goal members
 *    responses:
 *      200:
 *        description: Data Successfully extracted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/goalMembersResponse'
 *      500:
 *        description: Internal Server Error
 */
router.get("/:id/getallgoalmembers", getMembers);
/**
 * @openapi
 * /:id/addgoalmembers:
 *  post:
 *    tags:
 *    - Goal Members
 *    summary: create add members in goal
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/goalMembersRequest'
 *    responses:
 *      200:
 *        description: user data created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/goalMemberResponse'
 *      404:
 *        description: User already exists or Missing Arguments
 */
router.post("/:id/addgoalmembers", addmembers)
/**
 * @openapi
 * /:id/updatemembers:
 *  put:
 *    tags:
 *    - Goal Members
 *    summary: update members in goal
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/goalupdateRequest'
 *    responses:
 *      200:
 *        description: user data created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/goalupdateResponse'
 *      404:
 *        description: User doesn't exist
 *      500:
 *        description: Internal Server Error
 */
router.put("/:id/updatemembers", updatemembers)
/**
 * @openapi
 * /:id/removegoalmembers:
 *  put:
 *    tags:
 *    - Goal Members
 *    summary: remove members in goal
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/goalremoveRequest'
 *    responses:
 *      200:
 *        description: user data created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/goalremoveResponse'
 *      404:
 *        description: User doesn't exist
 *      500:
 *        description: Internal Server Error
 */
router.put("/:id/removegoalmembers", removemember)

module.exports = router;
