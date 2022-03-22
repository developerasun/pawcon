# PawCon Server

Install dependency. 

```shell
$npm install
```

Run nodemon for local development.

```shell
$npm nodemon app
```

## Upcoming document updates

These will be updated soon. 

<details>
<summary>list</summary>

### Router
### Authentication
### CORS
### Security
### APIs
### Middleware
</details>

## Characteristics

PawCon server section has following characteristics. 

1. Provide two login methods : jsonwebtoken and Google account.
1. Login validation is done in /model directory and sends to client for user-friendly UI.   

### Socket I.O

Support real-time chatting with socket IO and messages are emitted to each client.

```js 
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
```

1. CORS set both for Express app server and socket IO one.
1. RootRouter contains sub routers with control logics.

### Cache

Aggressive cache technique for GET request with 1 year cache time is applied.

```js
// set server-side cache 
const setCache = (req, res, next) => {
    // aggressive cache for React index.html
    const cacheTime = 31536000 // cache stored for 1 years
    if (req.method === 'GET') {
        res.set('Cache-control', `max-age=${cacheTime}`) 
    } else res.set('Cache-control', 'no-cache')
    next()
}
```