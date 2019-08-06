const mongoose = require("mongoose");
const Survey = mongoose.model("Survey");

module.exports = {
    async getSurveyList (req,res){
        const getSurveyList = await Survey.find();

        return res.json(getSurveyList);
    },

    async postSurveyRegister(req,res){
        const postSurvey = await Survey.create(req.body);

        return res.json(postSurvey);
    },

    async getIndex(req,res){
        return res.send("Bem Vindo");
    }
}