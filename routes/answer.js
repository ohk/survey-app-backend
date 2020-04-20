const router = require('express').Router()
const Survey = require('../models/Survey')
const Question = require('../models/Question')
const Answer = require('../models/Answer')
const verify = require('../middleware/verify.js')

router.post('/add', verify, (req, res) => {
    try {
        if (
            Answer.findOne({
                ipAddress: request.connection.remoteAddress,
                userId: req.user
            }).count === 0
        ) {
            const answer = new Answer({
                userId: req.user,
                surveyId: req.body.surveyId,
                answers: req.body.answers,
                ipAddress: request.connection.remoteAddress
            })
            try {
                answer.save()
            } catch (error) {
                return res
                    .status(400)
                    .send('Error: Answer could not be saved' + error.message)
            }
            res.send({ answerId: answer._id })
        }
    } catch (error) {
        res.status(400).send('Error: ' + error)
    }
})

router.get("/:survey",verify,(req,res) => {
    try {
        const answer = await Answer.findOne({ surveyId: req.params.surveyId, userId: req.user})

        return res.send({
            surveyId: answer.surveyId,
            answers: answer.answers
        })
    } catch (error) {
        return res.status(400).send(error)
    }
})
module.exports = router
