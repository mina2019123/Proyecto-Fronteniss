const express = require('express');
const routes = require('./rutas');
const path = require('path');
const app = express(); 
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;


//Exportar 
const db = require('./config/db');

db.sync()
        .then(()=> console.log('Conexion al servidor'))
        .catch(error => error);
//Importamos los modelos




//Habilitar bodyParser

app.use(bodyParser.urlencoded({extended:true}));





app.set('view engine', 'pug');

app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));
app.use(express.static('files'));
app.use('/public', express.static('public'));
app.use('/', routes());
app.listen(port, ()=>{
  
        console.log('conexion') 

});

