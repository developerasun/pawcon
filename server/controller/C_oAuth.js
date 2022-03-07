const config = require('../config/config')
const pawconGoogleUser = require('../model/googleOauthUser')

let googleUser = null // set initial google login user

const googleOauthRedirect_get = (req, res, next) => {
    // set login cookie
    res.cookie(
    config.AUTH.GOOGLE.COOKIE.NAME, 
    config.AUTH.GOOGLE.COOKIE.VALUE, 
    {
        maxAge : config.AUTH.GOOGLE.COOKIE.EXPIRATION,
        httpOnly : true, // prevent client-JS approach to cookie
    })

    if (req.user !== null) { 
        console.log("user created by passport : ",req.user) // passport save user info into request.user(Express.user)
        console.log("checking passport session : ", req.session.passport.user)
        googleUser = req.user // set google user from passport
    }
    res.status(200).redirect('/') // should be configured with client(react router)
}

// send user to client if exists
const googleOauthUser_get = async (req, res) => {
    try {
        // not logged out and user info saved in googleUser variable
        if (googleUser !== null) {
            const user = await pawconGoogleUser.findOne({googleId : googleUser.googleId})
            res.json({ success : true, username : user.username, thumnail : user.thumnail })
        } else { 
            console.log("no google user in req object")
            res.status(401).json( { success : false, user : null } )
        }
    } catch(err) {
        console.log(err)
    }
}

const googleOauthUserLogout_get = (req, res) => {
    req.logOut() // delete req.user property and clear login session
    googleUser = null // reset google user info
    res.redirect('/')
}


module.exports = {
    googleOauthUser_get, 
    googleOauthRedirect_get, 
    googleOauthUserLogout_get
}