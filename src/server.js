const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const goalsPost = require('./routes/goals.route');
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api/v1/get",routes)

app.use("/api/v1/post",goalsPost)

app.get('/', (req, res) => {

    res.send('Hello World!');
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

