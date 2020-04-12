const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);
        break;
    case 'listar':
        porHacer.getListado();
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.d, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.d);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconodido");
}