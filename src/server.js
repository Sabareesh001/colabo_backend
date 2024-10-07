const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const tagroutes = require("./routes/tag_routes")
const roadmaproutes = require("./routes/roadmap_routes")
const goalroutes = require("./routes/goal_routes")
const userroutes = require("./routes/user_routes")
const actionroutes = require("./routes/action_routes")

const phases = require("./routes/phasesroutes")

const goalmembers = require("./routes/goal_members_routes")


const db = require('../models');
const swaggerDocs = require('./utils/swagger');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", tagroutes, roadmaproutes, goalroutes, userroutes, actionroutes,goalmembers)
app.use("/api/phases",phases)


app.get('/', (req, res) => {

  res.send('Hello World!');
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    try {
        db.sequelize.authenticate()
        console.log("Database Connection established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }

})
