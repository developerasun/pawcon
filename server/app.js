// Express app setting
const express = require('express')
const app = express()
const path = require('path')
const config = require('./config/config')
const router = require('./router/route')

// Parser for cookie and request body
const cookieParser = require('cookie-parser')

// Database
const mongoose = require('mongoose')

// Connect mongoDB 
mongoose.connect( config.MONGO_URI, {})
        .then(()=>{ 
                console.log("db connected") 
                // and then start Express app
                app.listen(config.PORT_SERVER || 8080, ()=> console.log(`app executed at ${config.PORT_SERVER || 8080}`))
        })
        .catch((err)=>{ console.log(err)} )

// setting middlewares
app.use((req, res, next)=> { // request loggers
        console.group('<<<<< logging requests >>>>>')
        console.log(
                `method : ${req.method},
                 url : ${req.url}, 
                 host name : ${req.hostname}
                 path : ${req.path}`)
        console.groupEnd()
        next()
})

app.use(express.json()) // parsing request url
app.use(router) // routing handlers
app.use(express.static(path.join(__dirname, '../client/build'))) // serve client build files
app.use(cookieParser()) // setting cookie with JWT

// if client routing is used in React, any requests off the client routes
// will be redirected to index.html by server
app.get('/*', (req, res)=> {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})
