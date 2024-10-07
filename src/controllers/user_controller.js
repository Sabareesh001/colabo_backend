
const { users, master_user_statuses, master_user_roles } = require("../../models");
const getalluser = async (req, res) => {
    try {
        const data = await users.findAll({
            where: {
                is_active: true
            }
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(403).json(error)
    }
}
const getalluserstats = async (req, res) => {
    try {
        const data = await master_user_statuses.findAll({
            where: {
                is_active: true
            }
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(403).json(error)
    }
}
const getalluserrole = async (req, res) => {
    try {
        const data = await master_user_roles.findAll({
            where: {
                is_active: true
            }
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(403).json(error)
    }
}
module.exports = { getalluser, getalluserstats, getalluserrole }