const assert = require('assert');
const Mario = require('../model/mario');

describe("Deleting records", function() {

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

    // create a deleting test
    it('Deletes one record from database', function(done){
        Mario.findOneAndRemove({name: 'Jake mario'})
             .then(function(){
                Mario.findOne({name:'Jake mario'})
                     .then(function(result){
                        assert(result === true);
                        done();
                    });
                done();
            });
        done();
    });
});