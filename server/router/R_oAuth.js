const passport = require('passport')
const oAuthRouter = require('express').Router()
const oAuthController = require('../controller/C_oAuth')

// ========================= Google Ouath ========================= //
// base route : /oauth
oAuthRouter.get(
    '/google', 
    passport.authenticate('google', { scope:['profile'] }),
)

// redirect route should be the same with Authroized redirect URIs 
// registered in Google Cloud Platform. '/oauth/google/redirect',
oAuthRouter.get(
    '/google/redirect', 
    passport.authenticate('google'), oAuthController.googleOauthRedirect_get 
)

// FIX : fix internal server 500 error
oAuthRouter.get('/google/logout', oAuthController.googleOauthUserLogout_get)
// ========================= Google Ouath ========================= //


// ========================= Github Ouath ========================= //
// oauth/github
oAuthRouter.get('/github', (req, res) => {
    // do something here
})

// ========================= Github Ouath ========================= //
module.exports = oAuthRouter