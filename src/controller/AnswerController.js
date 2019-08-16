const Answer = require ("../model/answerModel");

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