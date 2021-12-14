// Database URI configuration : 1) .env 2) module.exports
// const CONFIG = require('./config/key')
require('dotenv').config()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
const Post = require('./model')

// connect mongoDB
mongoose.connect( MONGO_URI, {})
        .then(()=>{ console.log("connected") })
        .catch((err)=>{ console.log(err)} )

// Create a document and save
const dummyPost = new Post({
        title: "saving dummies in MongoDB", 
        author: "Jake Sung",
        date : new Date().toLocaleDateString()
})

dummyPost.save().then(()=>{console.log("saving sucess")})
                .catch((err)=>{console.log(err)})
