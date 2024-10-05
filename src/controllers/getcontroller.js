const { master_goal_roadmaps, tags } = require("../../models");


const getroadmaps = async (req, res) => {
    try {
        let data = await master_goal_roadmaps.findAll()
        // console.log(data);
        res.send(data)
    } catch (error) {
        console.log(error);
        res.status(403).json(error)
    }
}
const gettags = async (req, res) => {
    try {
        let data = await tags.findAll()
        res.send(data)
    } catch (error) {
        console.log(error)
        res.status(403).json(error)
    }
}
module.exports = { getroadmaps, gettags }