const router = require('express').Router()
const passport = require('passport')
const controller = require('../controller/controller')

// handle login route
router.post('/login', controller.login_post)

// handle signup route
router.post('/signup', controller.signup_post)

// handle google Oauth : activate passport google auth when the endpoint hit
router.get('/google', passport.authenticate('google', {
    scope: ['profile']    
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.send('do something here')
})

// api routes 
router.get('/apis', controller.apis_get)

module.exports = router