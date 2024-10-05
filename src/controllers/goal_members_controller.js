const { where } = require("sequelize");
const { users, master_user_roles, master_user_statuses } = require("../../models");

const Members = async (req, res) => {
  try {
    const goalmembers = await master_user_statuses.findAll({
        where:{is_active:true,id:2},
      include: [
        {
          model: users,
          as: 'user_data',
          where: { is_active: true }
        },
      ],
    });
    return res.json({goalmembers});
  } catch (error) {
    console.error("Error fetching:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { Members };
