const morgan = require('morgan')
const path = require('path')
const baseName = path.basename(__dirname)
// const morgan = require('morgan') // logger dependency

// FIX: fix middleware hanging error 
// logger takes a custom parameter and wraps req,res middleware 
const logger = (option) => {
    return (req, res, next) => {
        console.log(`logger dir : ${baseName}`)
        morgan(option) // tiny, short, dev, common, combined
        next() // move to next middleware
    }   
}

module.exports = logger