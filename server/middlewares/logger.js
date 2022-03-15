const config = require('../config/config')

// TO DO : use logOption object
const logOption = {
    fileOrigin : fileName, 
    cookie : {
        google : req.cookies[config.AUTH.GOOGLE.COOKIE.NAME],
        jwt : req.cookies[config.AUTH.JSONWEBTOKEN.NAME]
    }, 
    passport : {
        user : req.user, 
        session : req.session
    }, 
    user : {
        google : config.AUTH.GOOGLE.USER
    }
}

// logger takes a custom parameter and wraps req,res middleware 
const logger = (fileName) => {
    return (req, res, next) => {
        console.log("=============================")
        console.log(`logger coming from : ${fileName}`)
        console.log(`google cookie : ${config.AUTH.GOOGLE.COOKIE.NAME}. jsonwebtoken cookie: ${config.AUTH.JSONWEBTOKEN.NAME}`)
        console.log(`passport user check: ${req.user}`) // passport save user info into request.user(Express.user)
        console.log(`checking passport session : ${req.session}`)
        console.log(`google user check : ${config.AUTH.GOOGLE.USER}`)
        console.log("=============================")
        next() // move to next middleware
    }   
}

module.exports = logger