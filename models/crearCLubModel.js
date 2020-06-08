const Sequelize = require('sequelize');

const db = require('../config/db');



const crearCLub = db.define('crearClub',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrrement: true
    },
    nombre:{
        nombre: String

    },
    categoria:{
        categoria: String
    },
    imagen: {
        String
    }

});

module.exports = crearCLub;


