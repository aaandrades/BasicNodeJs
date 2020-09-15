// Main

const argv = require('./config/yargs').argv;
const operaciones = require('./calculadora/operaciones');
const historico = require('./calculadora/guardar');
const http = require('./http/http');


let command = argv._[0];
let registro;

switch (command) {

    case 'sumar':
        console.log('Suma de numeros');
        console.log(`La suma de los valores es: ${operaciones.sumar(argv.a, argv.b)}`);
        registro = historico.almacenar(`Suma: ${operaciones.sumar(argv.a, argv.b)}`);
        break;

    case 'restar':
        console.log('Resta de numeros');
        console.log(`La resta de los valores es: ${operaciones.restar(argv.a, argv.b)}`);
        registro = historico.almacenar(`Resta: ${operaciones.restar(argv.a, argv.b)}`);
        break;

    case 'multiplicar':
        console.log('Multiplicacion de numeros');
        console.log(`La multiplicacion de los valores es: ${operaciones.multiplicar(argv.a, argv.b)}`);
        registro = historico.almacenar(`Multiplicacion: ${operaciones.multiplicar(argv.a, argv.b)}`);
        break;

    case 'dividir':
        console.log('Division de numeros');
        console.log(`La division de los valores es: ${operaciones.dividir(argv.a, argv.b)}`);
        registro = historico.almacenar(`Division: ${operaciones.dividir(argv.a, argv.b)}`);
        break;

    case 'historico':
        console.log('CARGA DE OPERACIONES');
        registro = historico.leerJson();
        break;

    case 'personaje':
        console.log(http.peticion(argv.p));
        break;

    default:
        console.log('El comando no ha sido encontrado');
}