// api router here
const apiController = require('../controller/apiController')
const apiRouter = require('express').Router()

apiRouter.get('/users', apiController.getUsers)
apiRouter.get('/artworks/:page', apiController.getArtworks)

module.exports = apiRouter