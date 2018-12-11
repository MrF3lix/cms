const config = require('../config.json')
const mongoose = require('mongoose')

mongoose.connect(process.emitWarning.MONGODB_URI || config.connectionString)
mongoose.Promise = global.Promise

module.exports = {
    User: require('../users/user.model.js')
}