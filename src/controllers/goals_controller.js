const { where } = require("sequelize");
const { goals } = require("../../models");
function ToTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const goalsPost = async (req, res) => {
  const { name, description, start_date, end_date, roadmap_id, tag_id } =
    req.body;
  console.log(req.body)
  // Check if goal name already exists
  const goalname = await goals.findOne({

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

  try {
    const TitleCaseName = ToTitleCase(name);

    // Check if goal name already exists
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

    res.status(200).json({
      message: "Goal created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Something went wrong", success: false });
  }
};

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
    res
      .status(200)
      .json({
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

module.exports = {
  goalsPost,
  getallgoals,
  getgoalById,
  deleteGoal,
  editGoal,
};
