const fs = require ('fs');

let opciones = {
	interesado:{
		alias:'n',
		demand : true
	},
	idCurso:{
		alias:'c',
		demand : true
	},
	cedula:{
		alias:'ced',
		demand : true
	}
};

let crearArchivo = (nombre,cedula,curso) => {
	
	texto = 'El estudiante ' + nombre +
			' con cedula ' + cedula +
			' esta interesado en el curso ' + curso.nombre +
			' con id: ' + curso.id ;
	
	fs.writeFile('inscripcion-'+curso.id+'-'+cedula+'.txt',texto,(err) => {
		if (err) throw (err);
		console.log('inscripcion exitosa');
			
	});
	
}

let alertCursoInvalido = (curso) => {
	console.log('El id '+ curso + ' no existe' + '\n');
}

module.exports = {
	crearArchivo,
	opciones,
	alertCursoInvalido
};