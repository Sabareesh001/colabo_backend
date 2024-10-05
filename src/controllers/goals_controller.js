const { where } = require("sequelize");
const { goals } = require("../../models");
const goalsPost = async (req, res) => {
  const { name, description, start_date, end_date, roadmap_id, tag_id } =
    req.body;
  console.log(req.body)
  // Check if goal name already exists
  const goalname = await goals.findOne({
    where: {
      name: name.trim().toLowerCase(),
    },
  });



  if (goalname) {
    return res.status(403).json({
      message: "Goal name already exists",
    });
  }

  const newgoal = await goals.create({
    name,
    description,
    start_date,
    end_date,
    roadmap_id,
    tag_id,
  });
  res.send(newgoal);
};

const getallgoals = async (req, res) => {
  try {

    const data = await goals.findAll({
      where: {

      }

    })
    console.log(data)
    res.send(data)
  } catch (error) {
    console.log(error);
    res.status(403).json(error)
  }
}
module.exports = {
  goalsPost,
};
