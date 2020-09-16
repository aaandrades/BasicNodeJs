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

<<<<<<< HEAD

module.exports = {
    peticion,
    // peticionTest
}
=======
module.exports = peticion;
>>>>>>> 71c79bd40805a45a845a608c9487bb70b9bca278
