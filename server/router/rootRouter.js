const rootRouter = require('express').Router()

const loginRouter = require('./R_login')
const apiRouter = require('./R_api')
const feedbackRouter = require('./R_feedback')
const oAuthRouter = require('./R_oAuth')

// combine multiple routers
rootRouter.use('/apis', apiRouter)
rootRouter.use(loginRouter) // '/login', '/logout', '/signup'
rootRouter.use('/community/feedback', feedbackRouter)
rootRouter.use('/oauth', oAuthRouter)

module.exports = rootRouter