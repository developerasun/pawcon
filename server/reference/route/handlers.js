const express = require('express')
const port = 3000
const { User } = require('./model/user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const config = require('./config/key')
const { auth } = require('./middleware/auth')

// importing mongdo DB connection
 mongoose.connect(config.MONGO_URI, {
    // useNewUrlParser: true, => no longer necessary as of Mongoose 6.0
    // useUnifiedTopology: true, => no longer necessary as of Mongoose 6.0
    // useCreateIndex: true, 
    // useFindAndModify:false
}).then(()=>{ console.log("mongodb connected")})
  .catch(err => {console.log(err, "connection failed")})

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/', function(req, res) {
    res.send("learning mongodb essetials")
})

// Create a route for user sign-up
app.post('/register', (req, res) => {
    // user sign-up info from Front end => putting them into database
    const user = new User(req.body) // body-parser modules enables to use req.body, which contains the client info

    // save the user info into database
    user.save((err, userInfo)=>{
        if(err) {
            return res.json({
                success:false, 
                err, 
                delivered : user}) // check the result using web client program like Advanced REST 
        }
        return res.status(200).json({
            success:true
        })
    })
})

app.post('/login', function(req, res){
    // find if user email is in database. If exists, check user password
    // If correct, generates a token.

    User.findOne({email : req.body.email}, (err, user) => {
        if (!user) {
            return res.json( {
                loginSuccess : false, 
                message : "No user found" 
            })
        }
        user.comparePassword( req.body.password, (err, isMatch)=>{
            if(!isMatch) { 
                return res.json({ loginSuccess : false, message : "incorrect password" })
            } 

        user.generateToken((err, user)=>{
            if(err) {
                return res.status(400).send(err)
            }
            // save token : cookie or localStorage
            res.cookie("x_auth", user.token)
                .status(200)
                .json({ loginSuccess:true, userId:user._id })
        })
            
        } )
    })
})

// auth router : path, middleware, callback
app.get('/auth', auth, (req, res)=>{

    res.status(200).json({
        _id : req.user._id,
        isAdmin : req.user.role === 0 ? false : true, 
        isAuth : true, 
        email : req.user.email, 
        name : req.user.name, 
        lastname : req.user.lastname, 
        role : req.user.role, 
        image : req.user.image, 

    })
})

app.get('/logout', auth, (req, res)=>{
    User.findOneAndUpdate( {_id:req.user._id}, { token : ""}, (err, user)=>{
        if(err) return res.json({success:false, err}); 
        return res.status(200).send({success:true});
    } )
})

app.listen(port, ()=>{console.log(`app listening on port ${port}`)})