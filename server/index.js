const express = require("express");
require('dotenv').config()

const app = express();

app.get("/", function (request, response) {
    response.send("<h2>Привет Express!</h2>");
});

app.listen(process.env.PORT);