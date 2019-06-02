const express = require('express');
const app = express();
const bodyParser= require("body-parser");
const cors = require('cors');
const successResponder = require('./helpers/successResponder');
const errorResponder = require('./helpers/errorResponder');
const port = 4000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const createServer = () => {
    app.listen(port, () => {
        console.log('Started the server instance');
    });
}

module.exports = createServer;
