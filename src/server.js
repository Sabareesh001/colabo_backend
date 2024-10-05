const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
// const sequelize = require('../config');
const goalsPost = require('./routes/goal_routes');
const getrouter = require("./routes/roadmap_routes")
const getController = require('./routes/goal_members_controller');

const app = express();  

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('../models');
// app.use("/api", getController);
// app.use("/api/v1/get",routes)
app.use("/api/v1/get", getrouter)
app.use("/api/v1/get", getController)

app.use("/api/v1/post", goalsPost)

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
