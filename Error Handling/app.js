const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config

const app = express()
const port = process.env.PORT || 3000

// make app listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

