// google, github Oauth here
const passport = require('passport')
const path = require('path')
const oAuthRouter = require('express').Router()

// '/oauth/google', '/oauth/github'
oAuthRouter.get('/google', passport.authenticate('google', {
    scope:['profile']
}))

oAuthRouter.get('/redirect', passport.authenticate('google'), (req, res) => {
    // console.log(req.user.username)
    res.redirect('/') // should be configured with client(react router, react cookie) as well
})

oAuthRouter.get('/github', (req, res) => {
    // do something here
})

module.exports = oAuthRouter