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
        console.log("google login status : ", true)
        config.AUTH.GOOGLE.USER = req.user // set google user from passport
    }
    res.status(200).redirect('http://localhost:3000/')
} 

const googleOauthUserLogout_get = (req, res) => {
    config.AUTH.GOOGLE.USER = null // reset google user info
    delete req.user // delete req.user property and clear login session
    console.log("req.user deleted")
    console.log("req.user should be null: ", req.user, "google user should be null: ", config.AUTH.GOOGLE.USER)
    res.status(200).json( { success : true , user : req.user })
}


module.exports = {
    googleOauthRedirect_get, 
    googleOauthUserLogout_get
}