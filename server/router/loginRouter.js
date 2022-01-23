// login/logout router here
const loginRouter = require('express').Router()
const loginController = require('../controller/loginController')

loginRouter.post('/login', loginController.login_post)
loginRouter.post('/logout', loginController.logout_post)

loginRouter.post('/signup', loginController.signup_post)

module.exports = loginRouter