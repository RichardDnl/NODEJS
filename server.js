const express = require ("express");
const requireDir = require("require-dir");

const app = express();

app.use(express.json());

require("./src/database/connection");

requireDir("./src/model");

app.use('/api',require('./src/routes'));


app.listen(3001);