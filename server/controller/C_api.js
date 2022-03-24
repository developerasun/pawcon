const config = require('../config/config')
const pawconGoogleUser = require('../model/googleOauthUser')
const pawconFeedback = require('../model/post')

const path = require('path')
const fs = require('fs')

const OK = 200 // status code 200
const UNAUTHORIZED = 401 

// send user to client if exists
const getGoogleOauthUser = async (req, res) => {
    try {
        // not logged out and user info saved in googleUser variable
        if (config.AUTH.GOOGLE.USER !== null) {
            const user = await pawconGoogleUser.findOne({googleId : config.AUTH.GOOGLE.USER.googleId})
            res.status(OK).json({ success : true, username : user.username, thumnail : user.thumnail })
        } else { 
            console.log("no google user in req object")
            res.status(UNAUTHORIZED).json( { success : false, user : null } )
        }
    } catch(err) {
        console.log(err)
    }
}

// dynamic routes for artworks
const getArtworks = (req, res) => {
    const artworks = fs.readFileSync(path.join(__dirname, '..', 'apis', 'artworks', 'json',`artwork${req.params.page}.json`))
    res.set('Content-Type', 'application/json')
    res.status(OK).send(artworks.toString()) // send string data and set HTTP 200 OK success status
}

// TO DO : send latest 5 posts dynamically at a time
const getFeedbacks = async (req, res) => {
    try {
    const fivePosts =
        await pawconFeedback
            .find()
            .sort({"created_At":"desc"}) // order : latest
            .limit(5) // number of feedbacks per request: 5
        if (typeof fivePosts !== undefined || null) {
            res.status(OK).json({posts : fivePosts})
        }
    }catch(err) {
        console.log(err)
    }
}

module.exports = { 
    getGoogleOauthUser, 
    getArtworks,
    getFeedbacks
}