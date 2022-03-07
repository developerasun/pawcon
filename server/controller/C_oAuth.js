const config = require('../config/config')
const pawconGoogleOauthUser = require('../model/googleOauthUser')

// FIX : find a way to deliver req.user to client
const googleOauthRedirect_get = (req, res, next) => {
    // set cookie for client
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
    }
    next()
    // res.status(200).redirect('/') // should be configured with client(react router)
}

// send user by token
const googleOauthUser_get = (req, res, next) => {
    // 1. get google access token from db
    // 1. if exists, send response, if not, send error
    if (req.user) {
        const token = pawconGoogleOauthUser.findOne({googleId : req.user.googleId})
        console.log("current google user : ", req.user)
        console.log(token)
    } else { 
        console.log(" not working ")
    }
}

const googleOauthUserLogout_get = (req, res) => {
    req.logOut() // logout method is provided by passport
    res.redirect('/')
}


module.exports = {
    googleOauthUser_get, 
    googleOauthRedirect_get, 
    googleOauthUserLogout_get
}