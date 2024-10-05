const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
// const sequelize = require('../config');
const goalsPost = require('./routes/goals.route');
const getrouter = require("./routes/getroutes")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getController = require('./controllers/getcontroller');
const db = require('../models');
// app.use("/api", getController);
// app.use("/api/v1/get",routes)
app.use("/api/v1/get", getrouter)

app.use("/api/v1/post", goalsPost)

app.get('/', (req, res) => {

    res.send('Hello World!');
})


app.listen(process.env.PORT, () => {
    db.sequelize.authenticate()
    console.log(`Server is running on port ${process.env.PORT}`);
})
