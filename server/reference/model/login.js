const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

// Model and Schema in database
// Model : a list of concepts describing data(abstract)
// Schema : a list of attributes and instructions where 
// database engine reads/follows(concrete, physical)
const userSchema = mongoose.Schema({
    name : {
        type:String,
        maxlength: 50,
    }, 
    email: { 
        type: String, 
        trim: true, // trim removes white space
        unique: 1
    }, 
    password: {
        type: String, 
        minlength: 5
    }, 
    role: { 
        type: Number, 
        default: 0
    }, 
    image: String, 
    token: { // token is used for validation
        type: String
    }, 
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function(next){
    const user = this

    if (user.isModified('password')){
        // encrypting password
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err)
    
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err)
                user.password = hash    
                next()
            })
        })
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb) {
    // check plainPw === encryptedPW
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err), 
            cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {
    let user = this

    // jsonwebtoken 
    const token = jwt.sign(user._id.toHexString(), 'myToken')
    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb) { 
    const user = this;

    jwt.verify(token, 'myToken', function(err, decoded){
        // find user and coompare the token from client with the token from database 
        user.findOne({"_id":decoded, "token":token}, function(err, user){
            if (err) return cb(err); 
            cb(null, user);
        }) 
    })
}


// model wraps schema 
// mongoose.model('model name', schema)
const User = mongoose.model('User', userSchema) 

module.exports = { User }  // export a module for future usage
// { variable } => ES6 destructuring. 
// Demonstration
// const name = app.name;
// const version = app.version;
// const type = app.type;
// as this
// const { name, version, type } = app;