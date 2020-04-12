const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
)

const app = express()
app.use(express.json())
/**
 *
 * Import Routes
 *
 * User Route: User Integration
 *
 **/

const userRoute = require('./routes/user.js')
const surveyRoute = require('./routes/survey.js')
/**
 *
 * Route Middlewares
 *
 * User Route: /api/user
 */

app.use('/api/user', userRoute)
app.use('/api/survey', surveyRoute)
app.listen(process.env.PORT, () => {
    console.log('Server Up! Listen port ' + process.env.PORT)
})
