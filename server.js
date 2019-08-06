const express = require ("express");
const requireDir = require("require-dir");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/surveydb', {useNewUrlParser:true });

requireDir("./src/model");

app.use('/api',require('./src/routes'));


app.listen(3001);