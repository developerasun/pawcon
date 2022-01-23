// api router here
const apiController = require('../controller/apiController')
const apiRouter = require('express').Router()

apiRouter.get('/apis/', apiController.apis_get)

module.exports = apiRouter