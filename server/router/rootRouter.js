const rootRouter = require('express').Router()

const loginRouter = require('./loginRouter')
const apiRouter = require('./apiRouter')
const feedbackRouter = require('./feedbackRouter')
const oAuthRouter = require('./oAuthRouter')

// combine multiple routers
rootRouter.use('/apis', apiRouter)
rootRouter.use(loginRouter) // '/login', '/logout', '/signup'
rootRouter.use('/community', feedbackRouter)
rootRouter.use('/oauth', oAuthRouter)

module.exports = rootRouter