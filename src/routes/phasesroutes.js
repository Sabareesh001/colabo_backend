const express = require("express");
const router = express.Router();
const PhaseController = require("../controllers/phase_controller");

router.get('/allphases', PhaseController.GetAllphases);
router.get('/phaseget/:id', PhaseController.GetPhase);
router.get('/phasebygoal/:id', PhaseController.GetPhaseByGoal);
router.post("/phaseinsert", PhaseController.AddPhases);
router.put('/delete/:id', PhaseController.PhaseDelete);

module.exports = router;
