const myAssert = require('assert');
const Mario = require('../model/mario');

// done : callback for asynchronous test
describe('some demo test', function(){
    // it method for one single test
    it("add two numbers", function(done){
        myAssert(2+6===5); 
        done();
    });

    // next test continues

});