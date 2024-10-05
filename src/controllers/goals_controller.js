const { goals } = require("../../models");
const goalsPost = async (req, res) => {
  const { name, description, start_date, end_date, roadmap_id, tag_id } =
    req.body;

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

module.exports = {
  goalsPost,
};
