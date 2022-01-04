require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const router = require('./router/route')
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 8080
const mongoose = require('mongoose')

// Connect mongoDB 
mongoose.connect( MONGO_URI, {})
        .then(()=>{ 
                console.log("db connected") 
                // and then start Express app
                app.listen(PORT, ()=> console.log(`app executed at ${PORT}`))
        })
        .catch((err)=>{ console.log(err)} )

// setting middlewares
app.use((req, res, next)=> {
        console.group('<<<<< logging requests >>>>>')
        console.log(
                `method : ${req.method},
                 url : ${req.url}, 
                 host name : ${req.hostname}
                 path : ${req.path}`)
        console.groupEnd()
        next()
})
app.use(router)

// serve client build files
app.use(express.static(path.join(__dirname, '../client/build')))

// if client routing is used in React, any requests off the client routes
// will be redirected to index.html by server
app.get('/*', (req, res)=> {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})

