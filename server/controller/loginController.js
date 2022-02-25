const PawConUser  = require('../model/user')
const jsonWebToken = require('jsonwebtoken')
const config = require('../config/config')

// TESTED : Get PawCon user info from database and compare with enrolled JWT
const login_post = async (req, res) => {
    try {
        // parsing email and password from user request
        const { email, password } = req.body

        // compare the password in database password
        const user = await PawConUser.checkPassword(email, password)

        // if correct, create json web token for authorization
        const token = createJWT(user._id)

        // set cookie name, value, and option with jswon web token
        res.cookie(config.AUTH.JSONWEBTOKEN.NAME, token, { 
            maxAge : config.AUTH.JSONWEBTOKEN.EXPIRATION, 
            httpOnly : true // prevent client-JS approach to cookie
        })

        // send json response and end request-response cycle
        res.status(200).json(user)
    } catch(err) { 
        console.error(err)
        
        // if error occurs, send 400 status to client
        res.status(400).json( { success : false, errorMessage : "login failed for some reason" })
    }
}

// Create JSON web token for authorization
const createJWT = (DB_ID) => { 
    return jsonWebToken.sign( { DB_ID } , config.AUTH.JSONWEBTOKEN.SECRET, {
        expiresIn: config.AUTH.JSONWEBTOKEN.EXPIRATION
    } )
}

// TESTED : Create a new PawCon User and save it in database 
const signup_post = async (req, res) => {
    try { 
        const { email, password } = req.body
        console.log("data from front end : ", email, password)

        PawConUser.findOne( { email } )
        .then( async (isSignedUp) => {
            if (isSignedUp) { res.json( { message : "already signed up" } ) } 
            else {
                const user = await PawConUser.create( { email, password } )
                const token = createJWT(user._id)
                res.cookie(config.AUTH.JSONWEBTOKEN.NAME, token, {
                    httpOnly : true, 
                    maxAge : config.AUTH.JSONWEBTOKEN.EXPIRATION
                })
                res.status(201).json(user)
                }
            })
        .catch((err) => console.log(err))
    } catch(err) { 
        console.log("error type : ", err)
    }
}

// Reset JWT cookie expiration for logout
const logout_get = (req, res) => { 
    // response.cookie(cookie name, cookie value, cookie option)
    res.cookie( 
        config.AUTH.JSONWEBTOKEN.NAME,
        '', 
        { maxAge : config.AUTH.JSONWEBTOKEN.LOGOUT }
    )
    // jwt got reset here. if server redirect not presented, 
    // jwt still there not being deleted
    res.redirect('/') 
}

module.exports = { 
    login_post, 
    signup_post, 
    logout_get
}