// google, github Oauth here
const passport = require('passport')
const path = require('path')
const oAuthRouter = require('express').Router()
const config = require('../config/config')

// ========================= Google Ouath ========================= //
// '/oauth/google', '/oauth/github'
oAuthRouter.get(
    '/google', 
    passport.authenticate('google', { scope:['profile'] }),
)

// route : /oauth/google/redirect
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
    
        if (req.user !== null) { 
            console.log("user created by passport : ",req.user) // passport save user info into request.user(Express.user)
            // set passport user info to app local variable
            req.app.locals.user = req.user
        }

    res.status(200).redirect('/') // should be configured with client(react router)
    }, 
)

// route : /oauth/google/user
// FIX : res.app.locals stays the same,  
oAuthRouter.get('/google/user', (req, res) => {
    // check if passport user object exists in req.app.locals
    if (req.app.locals.user) { 
        res.json({success : true, user : req.app.locals.user})
        req.app.locals.user = null
    } else { 
        res.status(401).json({ success : false, user : null })
    }
})

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