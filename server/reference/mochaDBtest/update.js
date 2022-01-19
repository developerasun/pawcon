const assert = require('assert')
const Mario = require('../model/mario')

describe('Updating record', function() {
    let myMario

    beforeEach(function(done){

        // create a model instance
        myMario = new Mario({
            name: "Jake mario", 
            weight: 75
        })

        // save the model instance
        myMario.save().then(function(){
            done()
        })
    })

    // create an update test
    it('Updates one record from the database', function(done){
        
        Mario.findOneAndUpdate({ name : "Jake mario"}, { name : 'Cat mario' }).then(function(){
            Mario.findOne({_id:myMario._id}.then(function(result){
                assert(result.name === 'Cat mario')
                done()
            }))
        })
        done()
    })
})