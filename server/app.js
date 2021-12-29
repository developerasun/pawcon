// const express = require('express')
// const app = express()

require('dotenv').config()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

// Connect mongoDB 
mongoose.connect( MONGO_URI, {})
        .then(()=>{ 
                console.log("db connected") 
                // and then start Express app
                // app.listen(PORT, ()=> console.log(`app executed at ${PORT}`))
        })
        .catch((err)=>{ console.log(err)} )

