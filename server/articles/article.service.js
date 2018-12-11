const db = require('../helpers/db.js')
const Article = db.Article

const getAll = async() => {
    return await Article.find().select('-hash')
}

const getById = async (id) => {
    return await Article.findById(id).select('-hash')
}

const create = async (params) => {
    if(await Article.findOne({element: params.element})) {
        throw `Article ${params.element} already exist`
    }
    const article = new Article(params)
    await article.save()
}

const update = async (id, params) => {
    const article = await Article.findById(id)

    if(!article) throw 'Article not found'

    Object.assign(article, params)
    await article.save()
}

const _delete = (id) => {
    // await User.findByIdAndRemove(id)
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
}