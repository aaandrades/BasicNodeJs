// Guardar histórico de datos de operaciones

const fs = require('fs');

let historico = [];

const almacenarJson = () => {


    fs.readFile('db/data.json', function(err, data) {

        let dato = JSON.stringify(historico);
        try {
            var json = JSON.parse(data);
            json.push(JSON.stringify(historico));
        } catch (error) {
            fs.writeFile('db/data.json', dato, (err) => {
                if (err) throw new Error('No se ha podido guardar el registro de la operacion');
            })
        }

        fs.writeFile('db/data.json', JSON.stringify(json), (err) => {
            if (err) throw new Error('No se ha podido guardar el registro de la operacion');
        })
    });
}


const leerJson = () => {
    try {
        historico = require('../db/data.json');
        console.log(historico);
    } catch (error) {
        console.log('Archivo Vacio o Eliminado');
        historico = [];
    }
}


const almacenar = (operacion) => {
    let guardar = {
        operacion
    }
    historico.push(guardar);
    almacenarJson();
    return guardar;
}

module.exports = {
    almacenar,
    leerJson
}