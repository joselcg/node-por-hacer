const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('Crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('Actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('Borrar', 'Borrar un elemento', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}