const Sequelize = require('sequelize');



const sequelize = new Sequelize('proyectoZepelin', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;