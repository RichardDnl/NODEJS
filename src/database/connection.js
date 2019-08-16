const Sequelize = require("sequelize");
const sequelize = new Sequelize("test","root","", 
{host: '127.0.0.1',
dialect:"mysql",
port : 3307});

module.export = sequelize;
global.sequelize = sequelize;