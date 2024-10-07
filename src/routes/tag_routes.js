const express = require("express");
const { gettags, createtags } = require("../controllers/tags_controller");
const router = express.Router();
/**
 * @openapi
 * /gettags:
 *  get:
 *    tags:
 *    - Tags
 *    summary: To get all tags
 *    responses:
 *      200:
 *        description: Data Successfully extracted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/getalltagsresponse'
 *      403:
 *        description: Internal Server Error
 */
router.get("/gettags", gettags)
/**
 * @openapi
 * /addtags:
 *  post:
 *    tags:
 *    - Tags
 *    summary: create add tags
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/createtagrequestschema'
 *    responses:
 *      200:
 *        description: user data created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/createtagresponseschema'
 *      403:
 *        description: Field should not be empty or Internal Server Error
 */
router.post("/addtags", createtags)
module.exports = router;
