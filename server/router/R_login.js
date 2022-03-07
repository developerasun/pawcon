// login/logout router here
const path = require('path')
const loginPath = path.join('..', 'controller', 'C_login.js')

const loginRouter = require('express').Router()
const loginController = require(loginPath)

loginRouter.post('/login', loginController.login_post)
loginRouter.get('/logout', loginController.logout_get)

loginRouter.post('/signup', loginController.signup_post)

module.exports = loginRouter