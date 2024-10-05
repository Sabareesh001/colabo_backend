const { user } = require("../../models");

const ExistingMembers = async (req, res) => {
  try {
    const goalmembers = await user.findAll();
    return res.json(goalmembers);
  } catch (error) {
    console.error("Error fetching :", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { ExistingMembers };
