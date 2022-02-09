const rootRouter = require('express').Router()

const loginRouter = require('./loginRouter')
const apiRouter = require('./apiRouter')
const feedbackRouter = require('./feedbackRouter')

// combine multiple routers
rootRouter.use('/apis', apiRouter)
rootRouter.use(loginRouter) // '/login', '/logout', '/signup'
rootRouter.use('/community', feedbackRouter)

module.exports = rootRouter