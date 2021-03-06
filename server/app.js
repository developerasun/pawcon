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

// ===================== Express app setting ===================== // 
const express = require('express')
const app = express()
const config = require('./config/config')
const path = require('path') // don't use slash since it is platform-dependent.
const helmet = require('helmet') // security
// ===================== Express app setting ===================== // 


// ===================== socket io setting ===================== // 
const { createServer } = require('http')
const { Server } = require('socket.io')
const httpServer = createServer(app)
const io = new Server(httpServer, { 
        cors  : {
                origin : 'http://localhost:3000',
                credentials : true, 
                methods: 'GET,POST,DELETE',
                preflightContinue: false,
                optionsSuccessStatus:200
        }
})
// ===================== socket io setting ===================== // 


// ===================== passport setting ===================== // 
const passportSetup = require('./middlewares/passport')
const passport = require('passport')
const session = require('express-session') // save session id
// ===================== passport setting ===================== // 


// ===================== router and middleware setting ===================== // 
const rootRouter = require('./router/rootRouter')
const cookieParser = require('cookie-parser') // populate req.cookie => used in checkAuth middleware
const checkAuth = require('./middlewares/checkAuth')
const setCache = require('./middlewares/cache')
// ===================== router and middleware setting ===================== // 


// ===================== CORS setting ===================== // 
const cors = require('cors')
const corsOptions = {
        origin: 'http://localhost:3000', // set Access-Control-Allow-Origin header, can't be '*' when client credentials set true.
        methods: 'GET, POST, DELETE', // set Access-Control-Allow-Method header
        preflightContinue: false, // disable initial options for complex cors request(e.g DELETE)
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        credentials : true
}
// ===================== CORS setting ===================== // 


// ===================== database setting ===================== // 
const mongoose = require('mongoose')
mongoose.connect( config.MONGO_URI, {})
.then(()=>{ 
        console.log("db connected") 
                // and then start Express app
                httpServer.listen(config.PORT.SERVER, ()=> console.log(`app executed at ${config.PORT.SERVER}`))
        })
        .catch((err)=>{ console.log(err)} )
// ===================== database setting ===================== // 


// ===================== middleware execution ===================== //  
app.use(express.json()) // parsing request url
app.use(cors(corsOptions)) // cross origin resource sharing
app.use(setCache) // server side cache
app.use(rootRouter) // combine multiple routers
app.use(cookieParser()) // setting cookie with JWT
app.use(helmet())

// set session for passport oauth login
app.use(session({
        resave: false, 
        saveUninitialized: false,
        secret : config.AUTH.SESSION.SECRET
}))
app.use(passport.initialize()) // passport initalization
app.use(passport.session())
// ===================== middleware execution ===================== //  


// ===================== change zone ===================== //  
// TO DO : protect shop/checkout router with checkAuth
app.get('/shop/checkout', checkAuth, (req, res) => {
        res.json( { message : "auth checking works! "})
})
// ===================== change zone ===================== //  


// ===================== socket io execution ===================== // 
// socket is connected when user visits /community
// since socket io client is initiated in the route. 
io.on('connection', (socket) => {
        console.log("a user connected", socket.id)
        socket.on('chat:send', (data) => {
                // update and spread the client data to other sockets
                io.sockets.emit('chat:receive', {
                        userName : data.userName, 
                        message : data.message, 
                        senderId : data.senderId
                })
                console.log(data.userName, data.message)
        })
        socket.on('disconnect', ()=> console.log("disconnected"))
})
// ===================== socket io execution ===================== // 