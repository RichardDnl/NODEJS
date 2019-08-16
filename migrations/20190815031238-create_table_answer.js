'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("answers", {
      id : {
        type : Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey : true
    },
      text : {
        type : Sequelize.STRING(300),
      },
  
      surveyId : {
        type : Sequelize.STRING(300)
      },

  amountVotes :{
      type : Sequelize.INTEGER(11)
    },

    content : Sequelize.STRING(300),
    createdAt : Sequelize.DATE,
    updatedAt : Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("answers");
  }
};
