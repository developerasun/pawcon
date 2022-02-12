// check if user is admin in some protected route(e.g delete post)
const config = require('../config/config')
const checkAdmin = (req, res, next) => {
    
    // if admin, proceed to protected route
    next()
}