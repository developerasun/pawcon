const mongoose = require('mongoose')

// fix this schema based on github Oauth strategy
const authUserSchema = mongoose.Schema({
    username : String, 
    githubId : String, 
    thumnail : String
})

const pawconGithubOauthUser = mongoose.model('PawconGithubOauthUser', authUserSchema)

module.exports = pawconGithubOauthUser