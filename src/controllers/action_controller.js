const { where } = require("sequelize");
const { actions } = require("../../models");

function ToTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const AddActions = async (req, res) => {
  try {
    const Actiondata = [];
    for (const action of req.body) {
      const {
        name,
        description,
        start_date,
        end_date,
        priority,
        goal_id,
        action_type_id,
        goal_phase_id,
        action_type_status_id,
      } = phase;

      const existingAction = await actions.findOne({
        where: { goal_id: goal_id,goal_phase_id:goal_phase_id, name: ToTitleCase(name) },
        raw: true,     //if in case any of the data is null to get enable this
      });

      if (existingAction) {
        return res.status(400).json({
          message: "Validation Error: name already exist for this goal",
        });
      }

      if (
        !name ||
        !start_date ||
        !end_date ||
        !priority ||
        !goal_id ||
        !action_type_id ||
        !goal_phase_id ||
        !action_type_status_id
      ) {
        return res
          .status(400)
          .json({ message: "Validation Error: field required" });
      }

      const startDate = new Date(start_date);
      const endDate = new Date(end_date);

      if (
        startDate.getHours() === endDate.getHours() &&
        startDate.getMinutes() === endDate.getMinutes()
      ) {
        return res.status(400).json({
          message:
            "Validation Error: date and time cannot be the same in actions",
        });
      }

      if (startDate > endDate) {
        return res.status(400).json({
          message:
            "Validation Error: 'start_date' must be before 'end_date' in actions",
        });
      }

      Actiondata.push({
        ...action,
        name: ToTitleCase(name),
      });
    }

    const phaseInsert = await actions.bulkCreate(Actiondata, {
      fields: [
        "name",
        "description",
        "start_date",
        "end_date",
        "est_time",
        "act_time",
        "priority",
        "goal_id",
        "action_type_id",
        "goal_phase_id",
        "action_type_status_id",
      ],
    });

    res.status(201).json(phaseInsert);
  } catch (error) {
    console.error("Error inserting phases:", error.message);
    res.status(400).json({ error: error.message });
  }
};
