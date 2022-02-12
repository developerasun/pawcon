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
const rootRouter = require('./router/rootRouter')
const cors = require('cors')
const corsOptions = {
        origin: 'localhost',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Parser for cookie
const cookieParser = require('cookie-parser')

// Database
const mongoose = require('mongoose')

// Router and middleware
const loginRouter = require('./router/loginRouter')
const apiRouter = require('./router/apiRouter')
const feedbackRouter = require('./router/feedbackRouter')
const { checkAuth } = require('./middlewares/checkAuth')

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
app.use(rootRouter) // combine multiple routers
app.use(express.static(path.join(__dirname, '..', 'client', 'build'))) // serve client build files, socket io connected here
app.use(cookieParser()) // setting cookie with JWT


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
