const path = require('path')
const passport = require('passport')

// get google strategy
const googleStrategy = require('passport-google-oauth20').Strategy

// get github strategy

// get google client key/secret
const config = require('../config/config')

// get auth user model
const pawconGoogleOauthUser = require('../model/googleOauthUser')
const pawconGithubOauthUser = require(path.join(__dirname, '..', 'model', 'githubOauthUser.js'))

// serialize
// deserialize


// NOT TESTED 
// 1. get access token from Google Authorization Server 
passport.use(new googleStrategy({
    clientID : config.AUTH.GOOGLE.CLIENT_ID, 
    clientSecret : config.AUTH.GOOGLE.CLIENT_SECRET, 
    callbackURL : config.AUTH.GOOGLE.AUTH_REDIRECT
}, function(accessToken, refreshToken, profile, cb) {

    // model.create returns a void when callback parameter is given
    // if not, returns a Promise
    // username : String, googleId : String, thumnail : String
    pawconGoogleOauthUser.create({googleId : profile.id}, function(err, user) {
        return cb(err, user)
    })
}))