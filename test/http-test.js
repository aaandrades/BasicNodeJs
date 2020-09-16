// Initial
const expect = require('chai').expect;

// Testing App
const http = require('../http/http');

describe('Request API DragonBall', () => {
    it('Get all the characters', () => {
        http.peticion("Cell")
            .then(response => {
                // Json Object

                // console.log(response);
                expect(typeof response).to.equal('object');

            });
    });
});