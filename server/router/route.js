const router = require('express').Router()
const passport = require('passport')


// handle google Oauth : activate passport google auth when the endpoint hit
router.get('/google', passport.authenticate('google', {
    scope: ['profile']    
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.send('do something here')
})

module.exports = router