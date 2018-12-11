require('rootpath')()
const express = require('express')
const path = require('path')
const server = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./helpers/errorHandler.js')

const PORT = process.env.PORT || 8081

const start = () => {
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json())
    server.use(cors())
    server.use(express.static(path.join(__dirname, '../build')))

    server.use((err, req, res, next) => {
        if(401 === err.status) {
            res.redirect('/login')
        }
    })

    server.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'))
    })
    server.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'))
    })
    server.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'))
    })
    
    server.use(errorHandler)
    server.listen(PORT, () => { console.log(`Website runs at http://localhost:${PORT}/`) })
}

module.exports = {
    start
}