const mongoose = require('mongoose')

// TO DO : create a new schema for feedback, change file name
// post id, description(body), date, title, 
// Create a schema for web editor posting
const postSchema = mongoose.Schema({
    // editor js paragraphs
    description : {
        type : String, 
        required : true
    },
}, { timestamps: { createdAt: "created_At", updatedAt: "edited_At" } })


// schema.pre : Defines a pre hook for the model.
// Defines a pre hook for the model.
postSchema.pre('save', (next)=> {
    console.group("Before Doc creation")
    console.log("editor post being created")
    console.groupEnd()
    next()
})

// schema.post : Defines a post hook for the model.
postSchema.post('save', (doc, next)=>{
    console.group("After Doc creation")
    console.log("editor post successfully created")
    console.groupEnd()
    next()
})

// Creat a model
const Post = mongoose.model('Post', postSchema)

// Export the model as module
module.exports = Post