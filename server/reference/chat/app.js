const express = require('express')
const socket = require('socket.io')

// create an express application
const app = express()
const PORT = 3000
const router = require('./routes/router')

const server = app.listen(PORT, ()=> console.log("app listening at 3000"))

// Express static files middleware
app.use(express.static('public'))

// Home
app.get('/', (req, res)=> {
    console.log(req.method, req.url)
    res.sendFile('/public/index.html')
})

// Express Router for '/chat' endpoint
app.use('/chat', router)

// socket setup : socket function takes a paramter, which is
// a server instance to work with
const io = socket(server)

// add event listener for socket.io
io.on('connection', (socket)=>{
    console.log("socket connected", socket.id)
    
    socket.on('disconnect', ()=> console.log("disconnected"))

    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data)
    })
})

// page 404 redirect
app.use((req,res)=>{
    res.status(404)
       .sendFile(__dirname + '/public/404.html')
})