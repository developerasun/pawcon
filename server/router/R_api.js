// api router here
const path = require('path')
const apiPath = path.join('..', 'controller', 'C_api.js')

const apiController = require(apiPath)
const apiRouter = require('express').Router()

apiRouter.get('/users', apiController.getUsers)
apiRouter.get('/artworks/:page', apiController.getArtworks) // set req.params.page

module.exports = apiRouter