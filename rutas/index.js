const express = require('express');
const router = express.Router();

//importamos el controlador
const proyectosController = require('../controller/controller');

module.exports = function(){
    router.get('/' , proyectosController.proyectosHome);

    //Rutas de usuario

    router.get('/quienes-somos', proyectosController.quienesSomos);
 
   router.get('/galeria', proyectosController.galeria);
   
   router.get('/partidos', proyectosController.partidos);



    //Rutas de administrador

    router.get('/inicio-administrador', proyectosController.inicioAdministrador);

    router.get('/crear-club', proyectosController.crearClub);
    
    router.get('/galeria-administrador', proyectosController.galeriaAdministrador);

    router.get('/mostrar-club', proyectosController.mostrarClub);

    router.get('/crear-partidos', proyectosController.crearPartido);
    return router;
    };

   
