const config = require('../config/config')

// logger takes a custom parameter and wraps req,res middleware 
const logger = (fileName) => {
    return (req, res, next) => {
        const googleUser = config.AUTH.GOOGLE.USER
        const message = 'Does not exist'
        // passport save user info into request.user(Express.user)
        console.log(
            ` 
            =============================
            logger coming from : ${fileName}
            passport user check: ${req.user ? req.user : message }
            checking passport session : ${req.session ? req.session : message }
            google user check : ${ googleUser ? googleUser : message}
            =============================
            `)
        next() // move to next middleware
    }   
}

module.exports = logger