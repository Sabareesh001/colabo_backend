const express = require('express');
const { getalluser, getalluserstats, getalluserrole } = require('../controllers/user_controller');
const router = express.Router();
/**
 * @openapi
 * /getalluser:
 *  get:
 *    tags:
 *    - Users
 *    summary: To get all users
 *    responses:
 *      200:
 *        description: Data Successfully extracted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/userDataallresponse'
 *      403:
 *        description: Internal Server Error
 */
router.get("/getalluser", getalluser)
/**
 * @openapi
 * /getalluserstats:
 *  get:
 *    tags:
 *    - Users
 *    summary: To get all users stats
 *    responses:
 *      200:
 *        description: Data Successfully extracted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/userstatusresponseSchema'
 *      403:
 *        description: Internal Server Error
 */
router.get("/getalluserstats", getalluserstats)
/**
 * @openapi
 * /getalluserrole:
 *  get:
 *    tags:
 *    - Users
 *    summary: To get all users roles
 *    responses:
 *      200:
 *        description: Data Successfully extracted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/userroleresponseSchema'
 *      403:
 *        description: Internal Server Error
 */
router.get("/getalluserrole", getalluserrole)


module.exports = router