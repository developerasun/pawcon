const CONFIG = require('./config/key')
const mongoose = require('mongoose');
const Post = require('./model');

// connect mongoDB
mongoose.connect( CONFIG.MONGO_URI, {})
        .then(()=>{ console.log("connected") })
        .catch((err)=>{ console.log(err)} )

// const post = new Post()
