
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
const createtags = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name || name.length <= 0) {
            throw new Error("Field should not be empty");
        }
        const data = await tags.create({
            name

        })
        console.log(data)
        res.send(data)
    } catch (error) {
        console.log(error);
        res.status(403).json(error)
    }
}
module.exports = { gettags, createtags }

