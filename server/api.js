require('rootpath')()
const express = require('express')
const path = require('path')
const server = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('./helpers/jwt.js')
const errorHandler = require('./helpers/errorHandler.js')

const PORT = process.env.PORT || 8080

const start = () => {
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    server.use(cors())

    server.use(jwt())
    server.use('/users', require('./users/users.controller.js'))
    server.use('/articles', require('./articles/article.controller.js'))

    server.use(errorHandler)
    server.listen(PORT, () => { console.log(`Website runs at http://localhost:${PORT}/`) })
}

module.exports = {
    start
}