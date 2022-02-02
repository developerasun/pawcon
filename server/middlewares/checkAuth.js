// protecting route by checking authorization
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const JSONWEBTOKEN_NAME = config.AUTH.JSONWEBTOKEN.NAME

const checkAuth = (req, res, next) =>{
    const token = req.cookies[JSONWEBTOKEN_NAME]

    if (token) { 
        // Asynchronously verify given token using a secret or a public key to get a decoded token
        jwt.verify(token, config.AUTH.JSONWEBTOKEN.SECRET, (err, decodedToken) => {
            err ? res.redirect('/login') : next()
        })
    } else { 
        res.redirect('/login')
    }
    next()
}

module.exports = {
    checkAuth
}