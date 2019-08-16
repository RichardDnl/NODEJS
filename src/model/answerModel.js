const Sequelize = require("sequelize");

module.exports = sequelize.define("answers",{

    text : {
        type : Sequelize.STRING(300),
    },
    
    surveyId : {
        type : Sequelize.STRING(300)
    },

    amountVotes :{
        type : Sequelize.INTEGER(11)
    }

});

