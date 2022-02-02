// check if user is logged in in every routes
const { application } = require('express')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const PawConUser = require('../model/user')
const JSONWEBTOKEN_NAME = config.AUTH.JSONWEBTOKEN.NAME

const checkUser = (req, res, next) => {
    const token = req.cookies[JSONWEBTOKEN_NAME]
    if (token) {
        jwt.verify(token, config.AUTH.JSONWEBTOKEN.SECRET, (err, decodedToken) =>{
            if (err) {
                // 
                application.locals.user = null 
                next()
            } else { 
                const user = PawConUser.findById(decodedToken.id)
                application.locals.user = user
                next()
            }
        })
    }
    application.locals.user = null
    next()
}

module.exports = {
    checkUser
}