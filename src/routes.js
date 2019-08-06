const express = require("express");
const route = express.Router();
const SurveyController = require("./controller/SurveyController");
const AnswerController = require("./controller/AnswerController");

route.get("/", SurveyController.getIndex);
route.post("/postSurvey", SurveyController.postSurveyRegister);
route.get("/getSurveyList", SurveyController.getSurveyList);

route.post("/postAnswer",AnswerController.postAnswer);

module.exports = route;