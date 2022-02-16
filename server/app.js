/*
       /$$                               /$$                                                                               
      | $$                              | $$                                                                               
  /$$$$$$$  /$$$$$$  /$$    /$$ /$$$$$$ | $$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$   /$$$$$$$ /$$   /$$ /$$$$$$$ 
 /$$__  $$ /$$__  $$|  $$  /$$//$$__  $$| $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$|____  $$ /$$_____/| $$  | $$| $$__  $$
| $$  | $$| $$$$$$$$ \  $$/$$/| $$$$$$$$| $$| $$  \ $$| $$  \ $$| $$$$$$$$| $$  \__/ /$$$$$$$|  $$$$$$ | $$  | $$| $$  \ $$
| $$  | $$| $$_____/  \  $$$/ | $$_____/| $$| $$  | $$| $$  | $$| $$_____/| $$      /$$__  $$ \____  $$| $$  | $$| $$  | $$
|  $$$$$$$|  $$$$$$$   \  $/  |  $$$$$$$| $$|  $$$$$$/| $$$$$$$/|  $$$$$$$| $$     |  $$$$$$$ /$$$$$$$/|  $$$$$$/| $$  | $$
 \_______/ \_______/    \_/    \_______/|__/ \______/ | $$____/  \_______/|__/      \_______/|_______/  \______/ |__/  |__/
                                                      | $$                                                                 
                                                      | $$                                                                 
                                                      |__/                                                                 
*/

// Express app setting
const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const io = new Server(http.createServer(app))
const path = require('path') // don't use slash since it is platform-dependent.
const config = require('./config/config')

// passport setting : 1) passport setup(importing passport middleware) 2) passport initalization
const passportSetup = require('./middlewares/passport')
const passport = require('passport')
const session = require('express-session') // save session id

const rootRouter = require('./router/rootRouter')
const cors = require('cors')
const corsOptions = {
        origin: '*', // set Access-Control-Allow-Origin header
        methods: 'GET, POST, DELETE', // set Access-Control-Allow-Method header
        preflightContinue: false, // disable initial options for complex cors request(e.g DELETE)
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Parser for cookie
const cookieParser = require('cookie-parser')

// Database
const mongoose = require('mongoose')

// Router and middleware
const checkAuth = require('./middlewares/checkAuth')
const setCache = require('./middlewares/cache')

// Connect mongoDB 
mongoose.connect( config.MONGO_URI, {})
        .then(()=>{ 
                console.log("db connected") 
                // and then start Express app
                app.listen(config.PORT_SERVER || 8080, ()=> console.log(`app executed at ${config.PORT_SERVER || 8080}`))
        })
        .catch((err)=>{ console.log(err)} )

app.use(express.json()) // parsing request url
app.use(cors(corsOptions)) // cross origin resource sharing
app.use(setCache()) // server side cache
app.use(rootRouter) // combine multiple routers
app.use(express.static(path.join(__dirname, '..', 'client', 'build'))) // serve client build files, socket io connected here
app.use(cookieParser()) // setting cookie with JWT

// set session for passport oauth login
app.use(session({
        resave: false, 
        saveUninitialized: false,
        secret : config.AUTH.SESSION.SECRET
}))
app.use(passport.initialize()) // passport initalization
app.use(passport.session())

// protect shop/checkout router with checkAuth
app.get('/shop/checkout', checkAuth, (req, res) => {
        res.json( { message : "auth checking works! "})
})


// ===================== socket io ===================== // 
io.on('connection', (socket) => {
        console.log("a user connected", socket.id)

        socket.on('chat', (data) => {
                io.sockets.emit('chat', data)
                console.log(data.userName, data.message)
        })
        socket.on('disconnect', ()=> console.log("disconnected"))
})

// ===================== socket io ===================== // 


// ===================== page404(server) ===================== // 
// if client routing is used in React, any requests off the client routes
// will be redirected to index.html by server
// logic : user sends unmeaningful url request => server sends index.html => react router redirects page 404
app.get('/*', (req, res)=> {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})
// ===================== page404(server) ===================== // 
