const assert = require('assert');
const Mario = require('../model/mario');

describe("saving model into database", function() {
    // it : a single test
    it("saving mario", function(done){
        // Create a  model instance : myMario
    const myMario = new Mario({
        name: "Jake mario", 
        weight: 75
    });

    // document.save is an asynchronous request, provided by mongoose
    myMario.save()
        .then(()=>{
        assert(myMario.isNew === false);});
    done();  // finish the asynchronous test);
    });
})