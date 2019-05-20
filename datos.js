    
let info_cursos = [
	  { 
		id: 1,
		nombre: 'Programacion',
		duracion: '40 horas',
		inversion: 100000
	},{ 
		id: 2,
		nombre: 'Ingles',
		duracion: '20 horas',
		inversion: 50000
	},{ 
		id: 3,
		nombre: 'Matematicas',
		duracion: '20 horas',
		inversion: 0
	}
];

let buscarCurso = (idCurso) => info_cursos.find( oferta => oferta.id == idCurso);

let mostrarInfo = (curso,callback) => {
	setTimeout(function(){
			let descripcion ='El curso se llama ' + curso.nombre + '\n' +
					' el id es ' + curso.id + '\n' +
					' tiene una duracion de ' + curso.duracion + '\n' +
					' y un costo de '+ curso.inversion + ' pesos' + '\n';
			callback(descripcion);	
		},2000 * info_cursos.indexOf(curso));		   
}


let mostrarCurso = (curso) => {
		console.log('\n' +
					'El curso ' + curso.nombre +
					' su id es ' + curso.id +
					' tiene una duracion de ' + curso.duracion +
					' y un costo de : $'+ curso.inversion  + '\n'	
				   );		   
}

let catalogo = () => {
	console.log('Estos son los cursos');
	info_cursos.forEach( curso => mostrarCurso(curso));
}

let validarCurso = (idCurso) => {
	console.log('Validando curso...');
	
}


module.exports = {
	buscarCurso,
	info_cursos,
	mostrarInfo,
	mostrarCurso,
	catalogo,
	validarCurso
};