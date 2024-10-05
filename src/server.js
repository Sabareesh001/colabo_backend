const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const sequelize = require('../config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getController=require('./controllers/getcontroller');
app.use("/api",getController);

app.get('/', (req, res) => {

    res.send('Hello World!');
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
sequelize.sync();
