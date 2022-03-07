const path = require('path')
const pawconFeedback = require('../model/post')

// feedback post from client
const feedback_post = async (req, res) => { 
    // use try~catch to avoid unhandled Promise error
    try {
        const { onePost } = req.body // extract client data
        console.log( typeof onePost)
        console.log( onePost )
        const description = onePost
        // model.create is a short for creating model instance(document)
        // and save method. property name should be the same as desribed in mongoose schema.
        const instance = await pawconFeedback.create( { description } )
    
        // send response to client 
        res.status(201).json(instance)
    } catch(err) {
        console.log(err)
    }
}

// come back here after client feedback ui
const feedback_delete = (req, res) => {

}

module.exports = { 
    feedback_post
}