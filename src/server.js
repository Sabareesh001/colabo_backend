const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const tagroutes = require("./routes/tag_routes")
const roadmaproutes = require("./routes/roadmap_routes")
const goalroutes = require("./routes/goal_routes")
const userroutes = require("./routes/user_routes")
const actionroutes = require("./routes/action_routes")


const db = require('../models');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api", getController);
// app.use("/api/v1/get",routes)
// app.use("/api/v1/get", getrouter)

app.use("/api/v1/", tagroutes, roadmaproutes, goalroutes, userroutes, actionroutes)

app.get('/', (req, res) => {

    res.send('Hello World!');
})

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    db.sequelize.authenticate()
    console.log(`Server is running on port ${process.env.PORT}`);
})
