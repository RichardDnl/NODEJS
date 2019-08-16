const surveyModel = require("../model/surveyModel");

module.exports = {
    async getSurveyList (req,res){
        const getSurveyList = await surveyModel.find();

        return res.json(getSurveyList);
    },

    async postSurveyRegister(req,res){
        const postSurvey = await surveyModel.create(req.body);

        return res.json(postSurvey);
    },

    async getIndex(req,res){
        return res.send("Bem Vindo");
    }
}