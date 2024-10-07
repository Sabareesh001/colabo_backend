const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const tagroutes = require("./routes/tag_routes")
const roadmaproutes = require("./routes/roadmap_routes")
const goalroutes = require("./routes/goal_routes")
const userroutes = require("./routes/user_routes")
const actionroutes = require("./routes/action_routes")
const goalmembers = require("./routes/goal_members_controller")


const db = require('../models');

const app = express();  

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", tagroutes, roadmaproutes, goalroutes, userroutes, actionroutes,goalmembers)

app.get('/', (req, res) => {

    res.send('Hello World!');
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});
console.log(process.env.PORT)
const PORT=process.env.PORT || 8080;
app.listen(PORT, () => {
    db.sequelize.authenticate()
    console.log(`Server is running on port ${PORT}`);
})
