const { where } = require("sequelize");
const { goals,goal_members,phases } = require("../../models");
function ToTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const getallgoals = async (req, res) => {
  try {
    const data = await goals.findAll({
      where: {
        is_deleted: false,
        is_active: true,
      },
    });
    console.log(data);
    res
      .status(200)
      .json({ message: "All Goals fetched successfully", success: true, data });
  } catch (error) {
    console.log(error);
    res.status(403).json(error);
  }
};

const getgoalById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await goals.findOne({
      where: {
        id,
      },
    });
    res.status(200).json({
      message: "Goal fetched by Id successfully",
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Something went wrong", success: false });
  } 
};

const deleteGoal = async (req, res) => {
  const { userID, goalID } = req.body;

  if (!userID || !goalID) {
    return res
      .status(400)
      .json({ message: "userID and goalID are required", success: false });
  }

  const goalisDeleted = await goals.findOne({
    where: {
      id: goalID,
      is_deleted: true,
    },
  });

  if (goalisDeleted) {
    return res
      .status(400)
      .json({ message: "Goal already deleted", success: false });
  }

  try {
    const data = await goals.update(
      {
        is_deleted: true,
        deleted_by: userID,
        deleted_at: new Date(),
      },
      {
        where: {
          id: goalID,
        },
      }
    );
    res
      .status(200)
      .json({ message: "Goal deleted successfully", success: true });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Error while deleting Goal ", success: false });
  }
};

const editGoal = async (req, res) => {
  const {
    goalID,
    name,
    description,
    start_date,
    end_date,
    roadmap_id,
    tag_id,
  } = req.body;

  const isgoalDeleted = await goals.findOne({
    where: {
      id: goalID,
      is_deleted: true,
    },
  });
  if (isgoalDeleted) {
    return res
      .status(400)
      .json({ message: "Goal already deleted", success: false });
  }
  const updateData = {};
  if (name) {
    const TitleCaseName = ToTitleCase(name);
    updateData.name = TitleCaseName;
  }
  if (description) {
    updateData.description = description;
  }
  if (start_date) {
    updateData.start_date = start_date;
  }
  if (end_date) {
    updateData.end_date = end_date;
  }
  if (roadmap_id) {
    updateData.roadmap_id = roadmap_id;
  }
  if (tag_id) {
    updateData.tag_id = tag_id;
  }

  try {
    const data = await goals.update(updateData, {
      where: {
        id: goalID,
      },
    });

    if (!data[0]) {
      return res
        .status(400)
        .json({ message: "field should not be empty", success: false });
    }

    res
      .status(200)
      .json({ message: "Goal updated successfully", success: true });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Error while updating Goal ", success: false });
  }
};























const goalsPost = async (req, res) => {
  try{
    
    const {goal,goalmembers,phasesCreate,phase_members} = req.body;
    const { name, description, start_date, end_date, roadmap_id, tag_id } =goal;

  if (
    !name ||
    name.length <= 0 ||
    !description ||
    description.length <= 0 ||
    !start_date ||
    !end_date ||
    !roadmap_id ||
    !tag_id
  ) {
    return res
      .status(403)
      .json({ message: "Field should not be empty", success: false });
  }

    const TitleCaseName = ToTitleCase(name);

    const goalname = await goals.findOne({
      where: {
        name: TitleCaseName,
      },
    });

    if (goalname) {
      return res.status(403).json({
        message: "Goal name already exists",
        success: false,
      });
    }

    const newgoal = await goals.create({
      name: TitleCaseName,
      description,
      start_date,
      end_date,
      roadmap_id,
      tag_id,
    });

    const goalId = newgoal.id;

    let phasedata = true;
    let userexits = false;
    for (const data of goalmembers) {
      const { member_id, is_owner, is_assignee } = data;
      const checkuser = await goal_members.findOne({
        where: {
          goal_id: goalId,
          member_id: member_id
        }
      });

      phasedata = phasedata && (
        typeof member_id === "number" &&
        typeof is_assignee === "boolean" &&
        typeof is_owner === "boolean" &&
        checkuser === null
      );
      if (checkuser !== null) {
        return res.status(404).json({ message: "User already exists" });
      }
      if (!phasedata) break;
    }
    if (!phasedata) {
      return res.status(404).json({ message: "Missing arguments" });
    }
    const modifiedGoalMembers = goalmembers.map((body) => ({
      ...body,
      goal_id: goalId
    }))
    const data = await goal_members.bulkCreate(modifiedGoalMembers)


    const PhasesData = [];
    for (const phase of phasesCreate) {
      const { name, goal_id, start_date, end_date } = phase;

      const existingPhase = await phases.findOne({
        where: { goal_id: goalId, name: ToTitleCase(name) },
        raw: true,
      });

      if (existingPhase) {
        return res.status(400).json({
          message: "Validation Error: name already exist for this goal",
        });
      }

      if (!name || !goal_id || !start_date || !end_date) {
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
            "Validation Error: date and time cannot be the same in phase",
        });
      }

      if (startDate > endDate) {
        return res.status(400).json({
          message:
            "Validation Error: 'start_date' must be before 'end_date' in phase",
        });
      }

      PhasesData.push({
        ...phase,
        name: ToTitleCase(name),
        is_closed: false,
        is_active: true,
        is_deleted: false,
        deleted_by: null,
        deleted_at: null,
      });
    }

    const phaseInsert = await phases.bulkCreate(PhasesData, {
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
  }


    catch(error){

    }
};

















module.exports = {
  goalsPost,
  getallgoals,
  getgoalById,
  deleteGoal,
  editGoal,
};