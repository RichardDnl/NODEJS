'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("surveys", {
      id : {
        type : Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey : true
    },
    text : {
        type : Sequelize.STRING(300),
    },
    actived : {
        type : Sequelize.STRING(300),
    },
    content : Sequelize.STRING(300),
    createdAt : Sequelize.DATE,
    updatedAt : Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("surveys");
  }
};
