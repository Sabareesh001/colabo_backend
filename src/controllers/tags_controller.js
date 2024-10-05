
const { master_goal_roadmaps, tags } = require("../../models");
const gettags = async (req, res) => {
    try {
        let data = await tags.findAll({
            where: {
                is_active: true,
                is_deleted: false

            }
        })
        res.send(data)
    } catch (error) {
        console.log(error)
        res.status(403).json(error)
    }
}
module.exports = { gettags }

