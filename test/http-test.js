var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var http = require('../http/http');

describe('Testing asset function: ', function() {
    describe('Check AddTest Function', function() {
        it('Check the returned value using : assert.equal(value,value): ', function() {
            result = http.addTest('Cell');
            assert.equal(result, true);
        })
    })
})