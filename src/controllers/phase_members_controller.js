const { where } = require("sequelize");
const { phase_members } = require("../../models");

exports.postPhaseMembers = async (req, res) => {
  const phaseMembers = req.body;
  let hasError = false;
  let alreadyExists = false;
  try {
    if (!phaseMembers) {
      res.send({ message: "Please Provide the member details" }).status(400);
    }
    for (const data of phaseMembers) {
      if (!data.member_id || !data.phase_id) {
        hasError = true;
        continue;
      }

      try {
        const existingMember = await phase_members.findOne({
          where: {
            phase_id: data.phase_id,
            member_id: data.member_id,
          },
        });

        if (existingMember !== null) {
          alreadyExists = true;
        }
      } catch (error) {}
    }
    if (hasError) {
      return res
        .send({
          message: "Please Provide valid member details, some data is missing",
        })
        .status(400);
    } else if (alreadyExists) {
      return res
        .send({ message: "Member Already Exists Under the given Phase" })
        .status(400);
    }

    const result = await phase_members.bulkCreate(phaseMembers, {
      fields: ["phase_id", "member_id"],
    });
    res.status(200).json(result);
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.message || "Unexpected Error" });
  }
};

exports.getPhaseMembersById = async (req, res) => {
  const phaseId = req.params.phaseId;
  const phaseMemberId = req.params.phaseMemberId;
  try {
    if (!phaseMemberId || !phaseId) {
      res.send({ message: "Invalid Phase Member Id or Phase Id" }).status(400);
    }
    const result = await phase_members.findOne({
      where: {
        phase_id: phaseId,
        member_id: phaseMemberId,
        is_active: true,
      },
    });
    if (result !== null) {
      return res.send(result);
    }
    res.status(404).send({ message: "No Records Found" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.message || "Unexpected Error" });
  }
};

exports.getPhaseMembersByAllocationId = async (req,res)=>{
    const allocationId = req.params.allocationId;
  try {
    const result = await phase_members.findAll({
      where: {
        id:allocationId
      },
    });
   
    if (result !== null && result.length>0 ) {
      return res.send(result);
    }
    res.status(404).send({ message: "No Records Found" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.message || "Unexpected Error" });
  }
}

exports.getPhaseMembersByPhaseId = async (req, res) => {
  const phaseId = req.params.phaseId;
  try {
    const result = await phase_members.findAll({
      where: {
        phase_id: phaseId,
        is_active: true,
      },
    });
    if (result !== null) {
      return res.send(result);
    }
    res.status(404).send({ message: "No Records Found" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.message || "Unexpected Error" });
  }
};

exports.modifyPhaseMember = async (req, res) => {
  const { allocationId, phaseMemberId, phaseId, data } = req.body;
  try {
    if (allocationId) {
      const result = await phase_members.update(data, {
        where: {
          id: allocationId,
        },
      });
      if (result !== null) {
        return res.json(result);
      } else {
        return res.status(404).send({ message: "No Records Found" });
      }
    }
    if (!phaseMemberId || !phaseId) {
      return res.send({ message: "Invalid Ids" }).status(400);
    } else {
      const result = await phase_members.update(data, {
        where: {
          phase_id: phaseId,
          member_id: phaseMemberId,
        },
      });
      if (result !== null) {
        return res.json(result);
      } else {
        return res.status(404).send({ message: "No Records Found" });
      }
    }
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.message || "Unexpected Error" });
  }
};

exports.softDeletePhaseMember = async (req, res) => {
  const { allocationId, phaseMemberId, phaseId, userId } = req.body;
  try {
    if(!userId){
        return res.status(400).send({ message: "No user Id provided" });
    }
    if (allocationId) {
      const result = await phase_members.update(
        {
          is_active: false,
          is_deleted: true,
          deleted_at: Date.now(),
          deleted_by: userId,
        },
        {
          where: {
            id: allocationId,
          },
        }
      );
      if (result !== null) {
        return res.json(result);
      } else {
        return res.status(404).send({ message: "No Records Found" });
      }
    }
    if (!phaseMemberId || !phaseId) {
      return res.send({ message: "Invalid Ids" }).status(400);
    } else {
      const result = await phase_members.update({
        is_active: false,
        is_deleted: true,
        deleted_at: Date.now(),
        deleted_by: userId,
      }, {
        where: {
          phase_id: phaseId,
          member_id: phaseMemberId,
        },
      });
      if (result !== null) {
        return res.json(result);
      } else {
        return res.status(404).send({ message: "No Records Found" });
      }
    }
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.message || "Unexpected Error" });
  }
};
