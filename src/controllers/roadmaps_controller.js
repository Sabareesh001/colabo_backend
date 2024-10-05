const { master_goal_roadmaps } = require("../../models");


const getroadmaps = async (req, res) => {
    try {
        let data = await master_goal_roadmaps.findAll({
            where: {
                is_active: "true"
            }
        })
        // console.log(data);
        res.send(data)
    } catch (error) {
        console.log(error);
        res.status(403).json(error)
    }
}

module.exports = { getroadmaps }