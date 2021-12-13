const mongoose = require('mongoose')

// Create a schema for web editor posting
const postSchema = mongoose.Schema({
    count : Number, 
    title : String,
    author : {
        type : String, 
        required : true
    },
    date : String
})

// Creat a model
const Post = mongoose.model('Post', postSchema)

// Export the model as module
module.exports = Post