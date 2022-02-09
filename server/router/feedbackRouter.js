const extension = '.js'
const path = require('path')


const feedbackPath = path.join(__dirname, '..', 'controller', 'feedbackController'.concat(extension))
console.log(feedbackPath)

const feedbackController = require(feedbackPath)
const feedbackRouter = require('express').Router()

// NOT TESTED
// feedback requests coming from '/community' route
feedbackRouter.post('/community', feedbackController.feedback_post)
// feedbackRouter.delete('/community', feedbackController.feedback_delete)

module.exports = feedbackRouter