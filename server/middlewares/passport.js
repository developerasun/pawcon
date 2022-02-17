const path = require('path')
const passport = require('passport')

// get google strategy
const googleStrategy = require('passport-google-oauth20').Strategy

// get github strategy

// get google client key/secret
const config = require('../config/config')

// get auth user model
const pawconGoogleOauthUser = require('../model/googleOauthUser')
const pawconGithubOauthUser = require('../model/githubOauthUser')

// serialize : store user data into session. The result of the 
// serializeUser method is attached to the session 
passport.serializeUser((user, done) => {
    done(null, user.id)
})

// deserialize : retrieve data from the session
passport.deserializeUser( async (id, done) => {
    try { 
        const user = await pawconGoogleOauthUser.findById(id)
        done(null, user)
    } catch(err) { 
        console.log(err.message)
        throw err
    }
})

// 1. get access token from Google Authorization Server 
passport.use(new googleStrategy({
    clientID : config.AUTH.GOOGLE.CLIENT_ID, 
    clientSecret : config.AUTH.GOOGLE.CLIENT_SECRET, 
    callbackURL : config.AUTH.GOOGLE.AUTH_REDIRECT
}, async function(accessToken, refreshToken, profile, cb) {
    try { 
        console.log(profile) // inspect profile object from Google Server
        const user = await pawconGoogleOauthUser.findOne({googleId : profile.id}) // query by id
        if (user) cb(null, user)
        else {
            // model.create returns a void when callback parameter is given
            // if not, returns a Promise
            // username : String, googleId : String, thumnail : String
            const newUser = await pawconGoogleOauthUser.create({
                username : profile.displayName, 
                googleId : profile.id, 
                thumnail : profile.photos[0].value
            })
            cb(null, newUser)
        }
    } catch (err) { 
        console.log(err) 
        throw err
    }
}))
