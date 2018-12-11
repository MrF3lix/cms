const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    element: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Article', schema)