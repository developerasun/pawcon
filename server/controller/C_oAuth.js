const config = require('../config/config')
const logger = require('../middlewares/logger')

const googleOauthRedirect_get = (req, res, next) => {
    // set login cookie
    res.cookie(
    config.AUTH.GOOGLE.COOKIE.NAME, 
    config.AUTH.GOOGLE.COOKIE.VALUE, 
    {
        maxAge : config.AUTH.GOOGLE.COOKIE.EXPIRATION,
        httpOnly : true, // prevent client-JS approach to cookie
    })

    if (req.user !== null) { 
        console.log("user created by passport : ",req.user) // passport save user info into request.user(Express.user)
        console.log("checking passport session : ", req.session.passport.user)
        config.AUTH.GOOGLE.USER = req.user // set google user from passport
    }
    res.status(200).redirect('http://localhost:3000/')
} 

const googleOauthUserLogout_get = (req, res) => {
    // TO DO : add custom logger middleware
    // logger('dev')
    req.logOut() // delete req.user property and clear login session
    config.AUTH.GOOGLE.USER = null // reset google user info
    res.redirect('http://localhost:3000/')
}


module.exports = {
    googleOauthRedirect_get, 
    googleOauthUserLogout_get
}