// Consulta Api HTTP

const axios = require('axios');

exports.addTest = function peticion(personaje) {
    return axios({
            "method": "GET",
            "url": "https://dragon-ball-api.herokuapp.com/api/character/" + personaje,
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}