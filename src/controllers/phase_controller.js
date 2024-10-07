const { where } = require("sequelize");
const { phases } = require("../../models");

const GetAllphases = async (req, res) => {
  try {
    const phasegetalldata = await phases.findAll({
      where: { is_active: true, is_deleted: false },
    });
    if (!phasegetalldata) {
      return res.status(404).json({ message: "Phases not found" });
    }
    return res.status(201).json(phasegetalldata);
  } catch (error) {
    console.error("Error fetching phase:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error fetching phase" });
  }
};
const GetPhase = async (req, res) => {
  try {
    const { id } = req.params;
    const phasegetdata = await phases.findOne({
      where: {
        id: id,
        is_active: true,
        is_deleted: false,
      },
    });
    if (!phasegetdata) {
      return res.status(404).json({ message: "Phase not found in phase id" });
    }
    return res.status(201).json(phasegetdata);
  } catch (error) {
    console.error("Error fetching phase by id:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error fetching phase by id" });
  }
};
const GetPhaseByGoal = async (req, res) => {
  try {
    const { id } = req.params;
    const phasedata = await phases.findAll({
      where: {
        goal_id: id,
        is_active: true,
        is_deleted: false,
      },
    });
    if (phasedata.length === 0) {
      return res.status(404).json({ message: "Phase not found for this goal_id" });
    }
    return res.status(201).json(phasedata);
  } catch (error) {
    console.error("Error fetching phase by goal_id:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error fetching phase by goal_id" });
  }
};

const AddPhases = async (req, res) => {
  try {
    const phasedata = req.body.map((phase) => ({
      ...phase,
      is_closed: false,
      is_active: true,
      is_deleted: false,
      deleted_by: null,
      deleted_at: null,
    }));

    const phaseInsert = await phases.bulkCreate(phasedata, {
      fields: [
        "name",
        "goal_id",
        "start_date",
        "end_date",
        "is_closed",
        "is_active",
        "is_deleted",
        "deleted_by",
        "deleted_at",
      ],
    });

    res.status(201).json(phaseInsert);
  } catch (error) {
    console.error("Error inserting phases:", error);
    res.status(500).send("Error inserting phases");
  }
};

const PhaseDelete = async (req, res) => {
  try {
    const { id } = req.params;  
    const { deleted_by } = req.body;  

    const phase = await phases.findOne({ where: { id } });

    if (!phase) {
      return res.status(404).json({ message: "Phase not found" });
    }

    const phaseUpdate = await phases.update(
      {
        is_deleted: true,
        deleted_by: deleted_by,
        deleted_at: new Date(),
      },
      {
        where: { id: id },
      }
    );

    if (phaseUpdate[0] === 1) {
      return res.status(200).json({ message: "Phase deleted successfully" });
    } else {
      return res.status(400).json({ message: "Failed to update phase" });
    }
  } catch (error) {
    console.error("Error updating phase delete state:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { GetAllphases, GetPhase, GetPhaseByGoal, AddPhases, PhaseDelete };
