// google, github Oauth here
const passport = require('passport')
const path = require('path')
const oAuthRouter = require('express').Router()
const config = require(path.join(__dirname, '..', 'config', 'config.js'))

// ========================= Google Ouath ========================= //
// passport : middleware
// '/oauth/google', '/oauth/github'
oAuthRouter.get('/google', passport.authenticate('google', {
    scope:['profile']
}))

// should be the same with Authroized redirect URIs 
// registered in Google Cloud Platform. '/oauth/google/redirect',
console.log(config.AUTH_REDIRECT) 

oAuthRouter.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // console.log(req.user.username)
    res.redirect('/') // should be configured with client(react router, react cookie) as well
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