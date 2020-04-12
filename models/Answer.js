const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
    userId: String,
    surveyId: String,
    answers: [
        {
            questionId: String,
            answer: String
        }
    ],
    ipAddress: String
})

module.exports = mongoose.model('Answer', answerSchema)
