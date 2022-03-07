// protecting route by checking authorization
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const JSONWEBTOKEN_NAME = config.AUTH.JSONWEBTOKEN.NAME
const OAUTHGOOGLETOKEN_NAME = config.AUTH.GOOGLE.COOKIE.NAME
const OAUTHGITHUBTOKEN_NAME = config.AUTH.GITHUB // should be fixed later

const checkAuth = (req, res, next) =>{
    const jsonwebtokenCookie = req.cookies[JSONWEBTOKEN_NAME] // jsonwebtoken auth
    const oauthGoogleCookie = req.cookies[OAUTHGOOGLETOKEN_NAME] // google oauth cookie
    const oauthGithubCookie = req.cookies[OAUTHGITHUBTOKEN_NAME] // google oauth cookie
    
    if (jsonwebtokenCookie) { 
        // Asynchronously verify given token using a secret or a public key to get a decoded token
        jwt.verify(jsonwebtokenCookie, config.AUTH.JSONWEBTOKEN.SECRET, (err, decodedToken) => {
            err ? res.redirect('/login') : next()
        })
    } 

    // TO DO : add 
    if (oauthGoogleCookie) {
        // verify access token
    }

    if (oauthGithubCookie) {
        // verify access token
    }

    next() // move to next server logic
}

module.exports = checkAuth