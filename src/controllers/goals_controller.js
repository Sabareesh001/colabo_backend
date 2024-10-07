const { where } = require("sequelize");
const { goals, goal_members, phases ,phase_members, sequelize} = require("../../models");
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
  //this handles 4 inserts goal,goal members,phases  and phase members
  const t = await sequelize.transaction();
  try {
    const { goal, goalmembers, phasesData} = req.body;


    const { name, description, start_date, end_date, roadmap_id, tag_id } =goal;
    

    //goal creation starts
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
      throw { message: "Field should not be empty", success: false };
    }

    const TitleCaseName = ToTitleCase(name);

    const goalname = await goals.findOne({
      where: {
        name: TitleCaseName,
      },
    });

    if (goalname) {
      throw {message: "Goal name already exists",}
    }

    const newgoal = await goals.create({
      name: TitleCaseName,
      description,
      start_date,
      end_date,
      roadmap_id,
      tag_id,
    }, { transaction: t });

//goal creation succeeds and the goal id is got 

    const goalId = newgoal.id;
//goal members creation starts
    let userexits = false;
    for (const data of goalmembers) {
      const { member_id, is_owner, is_assignee } = data;
      const checkuser = await goal_members.findOne({
        where: {
          goal_id: goalId,
          member_id: member_id,
        },
      });

      let phasedata =
        typeof member_id === "number" &&
        member_id && 
        typeof is_assignee === "boolean" &&
        typeof is_owner === "boolean" &&
        checkuser === null;
      if (checkuser !== null) {
      throw { message: "User already exists" };
      }
      if (!phasedata) {
        throw { message: "Missing arguments" };
      };
    }

    const modifiedGoalMembers = goalmembers.map((body) => ({
      ...body,
      goal_id: goalId,
    }));
    const data = await goal_members.bulkCreate(modifiedGoalMembers, { transaction: t });
 // goal members are created and ends here

 // phase data insert starts
   const tempPhasesData = [];
    for (const phase of phasesData) {
      const { name, goal_id, start_date, end_date } = phase;

      const existingPhase = await phases.findOne({
        where: { goal_id: goalId, name: ToTitleCase(name) },
        raw: true,
      });

      if (existingPhase) {
       throw {
          message: "Validation Error: name already exist for this goal",
        };
      }

      if (!name || !goal_id || !start_date || !end_date) {
       throw { message: "Validation Error: field required" };
      }

      const startDate = new Date(start_date);
      const endDate = new Date(end_date);

      if (
        startDate.getHours() === endDate.getHours() &&
        startDate.getMinutes() === endDate.getMinutes()
      ) {
        throw {
          message:
            "Validation Error: date and time cannot be the same in phase",
        };
      }

      if (startDate > endDate) {
        throw {
          message:
            "Validation Error: 'start_date' must be before 'end_date' in phase",
        };
      }

      tempPhasesData.push({
        goal_id,
        start_date,
        end_date,
        name: ToTitleCase(name),
        is_closed: false,
        is_active: true,
        is_deleted: false,
        deleted_by: null,
        deleted_at: null,
      });
      const phaseInsert = await phases.create(tempPhasesData[tempPhasesData.length-1], { transaction: t },);
      if(phaseInsert===null){
        throw {message: "Invalid phases Data"}
      }

      for(const member of phase.members){
        if(!member.member_id){
          throw {message:"Incorrect Members Data"}
        }
      }
      const modifiedPhaseMembers = phase.members.map((data)=>({...data,phase_id:phaseInsert.id}))
      const phaseMembersInsert =  await phase_members.bulkCreate(modifiedPhaseMembers, { transaction: t },);
      if(phaseMembersInsert===null){
        throw {message: "Invalid phases Data"}
      }
    }
   //the phases creation ends here 
   await t.commit();
    res.status(201).json({message:"Goal was created Successfully"});
  } catch (error) {
    await t.rollback();
      res.status(400).send(error.message || "Unexpected Error");
  }
};

module.exports = {
  goalsPost,
  getallgoals,
  getgoalById,
  deleteGoal,
  editGoal,
};
