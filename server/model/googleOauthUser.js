const mongoose = require('mongoose')

const authUserSchema = mongoose.Schema({
    username : String, 
    googleId : String, 
    thumnail : String
})

const pawconGoogleOauthUser = mongoose.model('PawconGoogleOauthUser', authUserSchema)

module.exports = pawconGoogleOauthUser