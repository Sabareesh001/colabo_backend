const { where } = require("sequelize");
const { users, goal_members } = require("../../models");

const getMembers = async (req, res) => {
  try {
    const goalmembers = await goal_members.findAll({
      where: {
        goal_id: req.params.id,
        is_active: true
      }
      ,
      include: {
        model: users,
        as: "User"
      }
    });
    return res.json(goalmembers);
  } catch (error) {
    console.error("Error fetching:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const addmembers = async (req, res) => {
  try {
    const { member_id, is_owner, is_assignee } = req.body;
    const data = await goal_members.create({
      goal_id: req.params.id,
      member_id,
      is_owner,
      is_assignee
    })
    console.log(data);
    return res.json(data)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
const updatemembers = async (req, res) => {
  try {
    const { member_id, is_active, is_owner, is_assignee } = req.body
    const checkstatus = await goal_members.findOne({
      where: {
        goal_id: req.params.id,
        member_id,
      }
    })
    if (!checkstatus) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    const data = await goal_members.update(
      { is_active, is_owner, is_assignee },
      {
        where: {
          goal_id: req.params.id,
          member_id
        }
      })
    console.log(data);
    return res.json("Updated Successfully")
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
const removemember = async (req, res) => {
  try {
    const { member_id } = req.body;
    const checkstatus = await goal_members.findOne({
      where: {
        goal_id: req.params.id,
        member_id,
        is_active: true
      }
    })
    if (!checkstatus) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    const data = await goal_members.update(
      { is_active: false },
      {
        where: {
          goal_id: req.params.id,
          member_id
        }
      })
    console.log(data);
    return res.json("Removed Successfully")
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = { getMembers, addmembers, updatemembers, removemember };
