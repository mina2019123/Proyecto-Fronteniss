const Sequelize = require('sequelize');
const db = require('../config/db');

const crearPartido = db.define('crearPartido',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement
    },

    fkcrearClub:{
        type: Sequelize.STRING
    },

    equipos:{
        type: Sequelize.STRING
    },

    fecha:{
        type: Sequelize.DATE
    }

});


module.exports = crearPartido;