const extension = '.js'
const path = require('path')
const feedbackPath = path.join(__dirname, '..', 'controller', 'C_feedback'.concat(extension))

const feedbackController = require(feedbackPath)
const feedbackRouter = require('express').Router()

feedbackRouter.post('/', feedbackController.feedback_post)
// TO DO : add DELETE request
// feedbackRouter.delete('/', feedbackController.feedback_delete)

module.exports = feedbackRouter