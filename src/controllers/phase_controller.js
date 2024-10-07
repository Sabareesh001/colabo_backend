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
    const phasedata = req.body.map((phase, index) => {
      const { name, goal_id, start_date, end_date } = phase;
      const startDate = new Date(start_date);
      const endDate = new Date(end_date);

      if (!name || !goal_id ||!startDate||!endDate) {
        throw new Error(`Validation Error: flied required at ${index + 1}`);
      }


      if (startDate=== endDate) {
        throw new Error(`Validation Error: date not be same in phase ${index + 1}`);
      }

      if (startDate > endDate) {
        throw new Error(`Validation Error: 'start_date' must be before 'end_date' in phase ${index + 1}`);
      }

      return {
        ...phase,
        is_closed: false,
        is_active: true,
        is_deleted: false,
        deleted_by: null,
        deleted_at: null,
      };
    });

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
    console.error("Error inserting phases:", error.message);
    res.status(400).json({ error: error.message });
  }
};


const PhaseDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const { deleted_by } = req.body;

    if (!deleted_by) {
      return res.status(400).json({ message: "Validation Error: deleted_by field is required." });
    }

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
        where: { id },
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
