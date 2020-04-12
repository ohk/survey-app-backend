const router = require('express').Router()
const Survey = require('../models/Survey')
const Question = require('../models/Question')
const Answer = require('../models/Answer')
const verify = require('../middleware/verify.js')

module.exports = router
