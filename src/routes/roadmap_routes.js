const express = require("express");
const { getroadmaps } = require("../controllers/roadmaps_controller");
const router = express.Router();

/**
 * @openapi
 * /getroadmap:
 *   get:
 *     tags:
 *       - Roadmaps
 *     summary: Retrieve all roadmaps
 *     description: This endpoint fetches all roadmaps from the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved roadmaps.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Roadmap'
 *       500:
 *         description: Internal server error.
 */
router.get("/getroadmap", getroadmaps);

module.exports = router;
