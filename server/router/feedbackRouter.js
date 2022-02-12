const extension = '.js'
const path = require('path')
const feedbackPath = path.join(__dirname, '..', 'controller', 'feedbackController'.concat(extension))

const feedbackController = require(feedbackPath)
const feedbackRouter = require('express').Router()

// feedback requests coming from '/community' route
feedbackRouter.post('/', feedbackController.feedback_post)
// feedbackRouter.delete('/community', feedbackController.feedback_delete)

module.exports = feedbackRouter