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
        // user object contains success property, which lets you know password comparison result
        console.log("user jwt login status: ", user.success)

        // success => return user to client, failure => return user to error message        
        if (user.success) { 
            // if correct, create json web token for authorization
            const token = createJWT(user._id) // _id field created by MongoDB

            // set cookie name, value, and option with jswon web token
            res.cookie(config.AUTH.JSONWEBTOKEN.NAME, token, { 
                maxAge : config.AUTH.JSONWEBTOKEN.EXPIRATION, 
                httpOnly : true // prevent client-JS approach to cookie
            })

            // send json response and end request-response cycle
            res.status(200).json(user)
        } else { 
            res.status(401).json(user) // 401 unauthorized, contains error message
        }

    } catch(err) { 
        console.error(err)
        
        // if error occurs, send 500 status code to client
        res.status(500).json( { success : false, errorMessage : "Internal sever error" })
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
            if (isSignedUp) { 
                // 400 bad request, contains error message
                res.status(400).json( { success : false, errorMessage : "The email already used" } ) 
            } 
            else {
                const validation = await PawConUser.validatePassword(email, password)
                if (validation.success) {
                    console.log("Password validation passed")
                    const user = await PawConUser.create( { email, password } )
                    const token = createJWT(user._id)
                    res.cookie(config.AUTH.JSONWEBTOKEN.NAME, token, {
                        httpOnly : true, 
                        maxAge : config.AUTH.JSONWEBTOKEN.EXPIRATION,
                        sameSite: 'none', 
                        secure: true
                    })
                    res.status(201).json({
                        ...user,
                        success : true
                    }) // 201 created, often used with POST request
                } else {
                    res.status(400).json(validation) // 400 bad request, contains password error message
                }
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
        { 
            maxAge : config.AUTH.JSONWEBTOKEN.LOGOUT, 
            httpOnly: true, 
            sameSite: 'none', 
            secure: true
        }
    )
    // FIX : console.log not working here
    console.log("jwt logout status : ", true)
    console.log("checking cookie : ",req.cookies)
    res.status(200).json({ success :true, jwtCookie: null })// end client-server cycle
}

module.exports = { 
    login_post, 
    signup_post, 
    logout_get
}