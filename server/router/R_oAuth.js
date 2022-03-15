const passport = require('passport')
const path = require('path')
const fileName = path.basename(__filename)
const oAuthRouter = require('express').Router()
const oAuthController = require('../controller/C_oAuth')
const morgan = require('morgan')
const logger = require('../middlewares/logger')

oAuthRouter.use(morgan('tiny'))
oAuthRouter.use(logger(fileName))

// ========================= Google Ouath ========================= //
// base route : /oauth
oAuthRouter.get(
    '/google', 
    passport.authenticate('google', { scope:['profile'] }) )

// redirect route should be the same with Authroized redirect URIs 
// registered in Google Cloud Platform. '/oauth/google/redirect',
oAuthRouter.get(
    '/google/redirect', 
    passport.authenticate('google'), oAuthController.googleOauthRedirect_get)

oAuthRouter.get('/google/logout', oAuthController.googleOauthUserLogout_get)
// ========================= Google Ouath ========================= //


// ========================= Github Ouath ========================= //
// oauth/github
oAuthRouter.get('/github', (req, res) => {
    // do something here
})

// ========================= Github Ouath ========================= //
module.exports = oAuthRouter