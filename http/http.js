// Consulta Api HTTP
const axios = require('axios');


// function peticionTest(personaje) {
//     return axios({
//             "method": "GET",
//             "url": "https://dragon-ball-api.herokuapp.com/api/character/" + personaje,
//         })
//         .then((response) => {
//             console.log(response.data)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

let peticion = (personaje) => {
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


module.exports = {
    peticion,
    // peticionTest
}