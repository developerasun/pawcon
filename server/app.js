// Express app setting
const express = require('express')
const app = express()
const path = require('path') // don't use slash since it is platform-dependent.
const config = require('./config/config')
const router = require('./router/route')
const cors = require('cors')
const corsOptions = {
        origin: 'localhost',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Parser for cookie and request body
const cookieParser = require('cookie-parser')

// Database
const mongoose = require('mongoose')
const loginRouter = require('./router/loginRouter')
const apiRouter = require('./router/apiRouter')

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
app.use(cors(corsOptions)) // cross origin resource sharing
app.use('/apis', apiRouter)
app.use(loginRouter)
app.use(express.static(path.join(__dirname, '..', 'client', 'build'))) // serve client build files
app.use(cookieParser()) // setting cookie with JWT

// if client routing is used in React, any requests off the client routes
// will be redirected to index.html by server
// logic : user sends unmeaningful url request => server sends index.html => react router redirects page 404
app.get('/*', (req, res)=> {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})
