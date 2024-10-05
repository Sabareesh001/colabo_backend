const { goals } = require("../../models");
function ToTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
const goalsPost = async (req, res) => {
  const { name, description, start_date, end_date, roadmap_id, tag_id } =
    req.body;

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
  res.send(newgoal);
};

module.exports = {
  goalsPost,
};
