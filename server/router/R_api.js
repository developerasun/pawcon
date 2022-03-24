// api router here
const path = require('path')
const apiPath = path.join('..', 'controller', 'C_api.js')

const apiController = require(apiPath)
const apiRouter = require('express').Router()

// base route : /apis
apiRouter.get('/users/google', apiController.getGoogleOauthUser)
apiRouter.get('/artworks/:page', apiController.getArtworks) // set req.params.page
apiRouter.get('/feedbacks', apiController.getFeedbacks)

module.exports = apiRouter