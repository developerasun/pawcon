const extension = '.js'
const path = require('path')
const feedbackPath = path.join(__dirname, '..', 'controller', 'C_feedback'.concat(extension))

const feedbackController = require(feedbackPath)
const feedbackRouter = require('express').Router()

// TO DO : add api route for feedback
// feedback requests coming from '/community/feedback' route
feedbackRouter.post('/feedback:page', feedbackController.feedback_post)
// feedbackRouter.delete('/community', feedbackController.feedback_delete)

module.exports = feedbackRouter