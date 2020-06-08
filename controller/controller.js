//Rutas de usuario

exports.proyectosHome =  (req, res)=>{
    res.render('index');
}



exports.quienesSomos = (req, res)=>{
    res.render('quienes-somos');

}


exports.galeria = (req, res)=>{
    res.render('galeria');
}

exports.partidos= (req, res) =>{
    res.render('partidos');
};



//Rutas Administrador


exports.inicioAdministrador = (req, res)=>{
    res.render('inicio-administrador');
}

exports.crearClub = (req, res)=>{
    var nombrePagina = 'Crear club';
    res.render('crear-club',{
        nombrePagina
    });
}

exports.mostrarClub = (req, res)=>{
    res.render('mostrar-club')
};

exports.galeriaAdministrador = (req, res)=>{
    res.render('galeria-administrador')
};

exports.galeria = (req, res)=>{
    res.render('galeria')
};


exports.crearPartido = (req, res)=>{
    const nombrePagina =  'crear Partido';
    res.render('crear-partidos', {
        nombrePagina
    })
};





