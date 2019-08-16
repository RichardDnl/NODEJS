const Sequelize = require("sequelize");

module.exports = sequelize.define("surveys", {
    id : {
        type : Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey : true,
    },
    text : {
        type : Sequelize.STRING(300),
    },
    actived : {
        type : Sequelize.STRING(300),
    }
});