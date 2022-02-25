// google, github Oauth here
const passport = require('passport')
const path = require('path')
const oAuthRouter = require('express').Router()
const config = require('../config/config')

// ========================= Google Ouath ========================= //
// passport : middleware
// '/oauth/google', '/oauth/github'
oAuthRouter.get(
    '/google', 
    passport.authenticate('google', { scope:['profile'] }),
)

// should be the same with Authroized redirect URIs 
// registered in Google Cloud Platform. '/oauth/google/redirect',

oAuthRouter.get(
    '/google/redirect', 
    passport.authenticate('google'), 
    (req, res) => {
        // set cookie for client
        res.cookie(
        config.AUTH.GOOGLE.COOKIE.NAME, 
        config.AUTH.GOOGLE.COOKIE.VALUE, 
        {
            maxAge : config.AUTH.GOOGLE.COOKIE.EXPIRATION,
            httpOnly : true, // prevent client-JS approach to cookie
        })
    console.log(config.AUTH.GOOGLE.AUTH_REDIRECT) 
    
    // TEST THIS : check if this works in client res.json()
    res.locals.testVariable = 'test'
    res.status(200).redirect('/') // should be configured with client(react router)
    }
)

oAuthRouter.get('/logout', (req, res) => {
    req.logOut() // logout method is provided by passport
    res.redirect('/')
})

// ========================= Google Ouath ========================= //



// ========================= Github Ouath ========================= //
oAuthRouter.get('/github', (req, res) => {
    // do something here
})

// ========================= Github Ouath ========================= //
module.exports = oAuthRouter