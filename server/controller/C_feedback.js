const config = require('../config/config')
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
        res.status(config.STATUSCODE.CREATED).json(instance)
    } catch(err) {
        console.log(err)
    }
}

// NOT TESTED : come back here after client feedback ui
const feedback_delete = async (req, res) => {
    const { description } = req.body
    const result = await pawconFeedback.findOneAndDelete({description})
    if (result) {
        console.log('successfully deleted')
        res.status(config.STATUSCODE.DELETED)
    }
}

module.exports = { 
    feedback_post
}