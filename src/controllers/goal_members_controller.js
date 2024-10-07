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
    let phasedata = true;
    let userexits = false;
    for (const data of req.body) {
      const { member_id, is_owner, is_assignee } = data;
      const checkuser = await goal_members.findOne({
        where: {
          goal_id: req.params.id,
          member_id: member_id
        }
      });

      // Check for existence and data type
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

    console.log(phasedata);

    if (!phasedata) {
      // Handle the case where validation fails
      return res.status(404).json({ message: "Missing arguments" });
    }
    const upload = req.body.map((body) => ({
      ...body,
      goal_id: req.params.id
    }))
    // const { member_id, is_owner, is_assignee } = req.body;
    const data = await goal_members.bulkCreate(upload)
    // console.log(data);
    return res.json({ Message: "Added Successfully", data: data })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
const updatemembers = async (req, res) => {
  try {
    const { member_id, is_active, is_owner, is_assignee, is_deleted } = req.body
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
      { is_active, is_owner, is_assignee, is_deleted },
      {
        where: {
          goal_id: req.params.id,
          member_id
        }
      })
    console.log(data);
    return res.json({ Message: "Updated Successfully" })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
const removemember = async (req, res) => {
  try {
    const { member_id, deleted_by } = req.body;
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
      {
        is_deleted: true,
        is_active: false,
        deleted_at: Date.now(),
        deleted_by
      },
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
