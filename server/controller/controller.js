const PawConUser  = require('../model/user')
const jsonWebToken = require('jsonwebtoken')
const config = require('../config/config')
const path = require('path')

const fs = require('fs')
const dummyjson = require('dummy-json')
const template = fs.readFileSync(path.join(__dirname, '../data', 'template.hbs'), { encoding: 'utf8' });

// login form flow NodeJs Router
// 1) Signup post 
// 2) Login post
// 3) Logout get 

// NOT TESTED : Get PawCon user info from database and compare with enrolled JWT
const login_post = (req, res) => {
    const { email, password } = req.body
    // PawConUser.findOne( { email } ).then()
}

// TESTED : Create JSON web token for authorization
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

// NOT TESTED : Reset JWT cookie expiration for logout
const logout_get = (req, res) => { 
    // response.cookie(cookie name, cookie value, cookie option)
    res.cookie( config.AUTH.JSONWEBTOKEN.NAME, '', 
    { maxAge : config.AUTH.JSONWEBTOKEN.LOGOUT } )
}

// TESTED : send a dummy json template
const apis_get = (req, res) => {
    res.set('Content-Type', 'application/json')
    res.status(200).send(dummyjson.parse(template))
}


module.exports = {
    login_post,
    signup_post, 
    apis_get
}