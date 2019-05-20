const cursos = require ('./datos');
const estudiantes = require ('./archivo');

const argv = require ('yargs')
			.command('inscribir','Realizar inscripcion',estudiantes.opciones)
			.argv;


if (argv.interesado != undefined) {
	
	
	// se valida el curso
	if ( cursos.buscarCurso(argv.c) == undefined ) {
		estudiantes.alertCursoInvalido(argv.c);
		cursos.catalogo();
		return;
		process.exit();
	}
		
	// inscripcion
	cursos.mostrarCurso(cursos.buscarCurso(argv.c));
	estudiantes.crearArchivo(argv.n,argv.ced,cursos.buscarCurso(argv.c));

}else{
	// mostrar cursos
	for (i = 1; i <= (cursos.info_cursos).length; i++) {
			cursos.mostrarInfo(cursos.buscarCurso(i),function(resultado){
			console.log(resultado);
		});
	}
}