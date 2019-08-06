const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({

    text : {
        type : String,
        required : true
    },
    
    surveyId : {
        type : String
    },

    amountVotes :{
        type : String
    }

});

mongoose.model("Answer",AnswerSchema);