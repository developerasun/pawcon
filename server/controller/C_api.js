const config = require('../config/config')
const pawconGoogleUser = require('../model/googleOauthUser')

const path = require('path')
const fs = require('fs')

// send user to client if exists
const getGoogleOauthUser = async (req, res) => {
    try {
        // not logged out and user info saved in googleUser variable
        if (config.AUTH.GOOGLE.USER !== null) {
            const user = await pawconGoogleUser.findOne({googleId : config.AUTH.GOOGLE.USER.googleId})
            res.status(200).json({ success : true, username : user.username, thumnail : user.thumnail })
        } else { 
            console.log("no google user in req object")
            res.status(401).json( { success : false, user : null } )
        }
    } catch(err) {
        console.log(err)
    }
}

// dynamic routes for artworks
const getArtworks = (req, res) => {
    const artworks = fs.readFileSync(path.join(__dirname, '..', 'apis', 'artworks', 'json',`artwork${req.params.page}.json`))
    res.set('Content-Type', 'application/json')
    res.status(200).send(artworks.toString()) // send string data and set HTTP 200 OK success status
}

module.exports = { 
    getGoogleOauthUser, 
    getArtworks
}