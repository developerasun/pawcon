const config = require('../config/config')

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
        config.AUTH.GOOGLE.USER = req.user // set google user from passport
    }
    res.status(200).redirect('/') // should be configured with client(react router)
}

const googleOauthUserLogout_get = (req, res) => {
    req.logOut() // delete req.user property and clear login session
    config.AUTH.GOOGLE.USER = null // reset google user info
    res.redirect('/')
}


module.exports = {
    googleOauthRedirect_get, 
    googleOauthUserLogout_get
}