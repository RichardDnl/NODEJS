const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
    text : {
        type : String,
        required : true,
    },
    createAt : {
        type : Date,
        default : Date.now
    },
    actived : {
        type : String
    }
});


mongoose.model("Survey",SurveySchema);