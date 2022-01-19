const assert = require('assert');
const Mario = require('../model/mario');

describe("finding records", function() {

    let myMario;
    // Use mocha hook : create and save model before eact test
    beforeEach(function(done){
        // Create a model instance. Each record will be assigned object id
        myMario = new Mario({
            name: "Jake mario", 
            weight: 75
        });

        // Save the instance
        myMario.save()
        .then(()=>{ done(); });
    });

    // test : find one record with model.findOne method
    it('finds one record by findOne method from the database', function(done){
        Mario.findOne({ name : "Jake mario" })
             .then((result)=>{
                 assert(result.name === "Jake mario");});
        done(); // finish asynchronous request
    })

    // test : find one record with object id
    it('finds one record by ID from the database', function(done){
        Mario.findOne( { _id : myMario._id } )
             .then((result)=>{
                 assert(result._id.toString() === myMario._id.toString());})
        done(); // finish asynchronous request
    })
});