// Parámetros de argumentos

const argv = require('yargs')
    .command('sumar', 'Sumar dados dos numeros', {
        valor1: {
            demand: true,
            alias: 'a',
            desc: 'Ingrese primer valor'
        },
        valor2: {
            demand: true,
            alias: 'b',
            desc: 'Ingrese segundo valor'
        }
    })
    .command('restar', 'Sumar dados dos numeros', {
        valor1: {
            demand: true,
            alias: 'a',
            desc: 'Ingrese primer valor'
        },
        valor2: {
            demand: true,
            alias: 'b',
            desc: 'Ingrese segundo valor'
        }
    })
    .command('personaje', 'Ingrese Personaje de Dragon Ball', {
        ciudad: {
            demand: true,
            alias: 'p',
            desc: 'Ingrese Personaje'
        },
    })
    .command('multiplicar', 'Sumar dados dos numeros', {
        valor1: {
            demand: true,
            alias: 'a',
            desc: 'Ingrese primer valor'
        },
        valor2: {
            demand: true,
            alias: 'b',
            desc: 'Ingrese segundo valor'
        }
    })
    .command('dividir', 'Sumar dados dos numeros', {
        valor1: {
            demand: true,
            alias: 'a',
            desc: 'Ingrese primer valor'
        },
        valor2: {
            demand: true,
            alias: 'b',
            desc: 'Ingrese segundo valor'
        }
    }).command('historico', 'Historico de Operaciones', {})
    .help().argv;

module.exports = {
    argv
}