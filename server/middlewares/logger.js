// const morgan = require('morgan') // logger dependency

// logger takes a custom parameter and 
// wraps req,res middleware 
const logger = (where) => {
    // use the custom parameter
    console.log(`logger coming from : ${where}`)
    return (req, res, next) => {

        // move to next middleware
        next()
    }   
}

module.exports = logger