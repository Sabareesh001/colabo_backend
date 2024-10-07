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
      .json({ message: "Goal fetched by Id successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Something went wrong", success: false });
  }
};

const deleteGoal = async (req, res) => {
  const { userID, goalID } = req.body;

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

  try {
    const TitleCaseName = ToTitleCase(name);
    const data = await goals.update(
      {
        name: TitleCaseName,
        description,
        start_date,
        end_date,
        roadmap_id,
        tag_id,
      },
      {
        where: {
          id: goalID,
        },
      }
    );
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
