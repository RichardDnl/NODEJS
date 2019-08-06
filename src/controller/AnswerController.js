const mongoose = require("mongoose");
const Answer = mongoose.model("Answer");

module.exports = {
    async postAnswer (req,res){
        const postAnswer = await Answer.create(req.body);

        return res.json(postAnswer);
    },

    async getAnswerList (req,res){
        const getAnswerList = await Answer.find();

        return res.json(getAnswerList);
    }
}