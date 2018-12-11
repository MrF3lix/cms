const express = require('express')
const router = express.Router()
const userService = require('./article.service')

const create = (req, res, next) => {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}

const getAll = (req, res, next) => {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err))
}

const getById = (req, res, next) => {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err))
}

const update = (req, res, next) => {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}

const _delete = (req, res, next) => {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err))
}

router.post('/create', create)
router.get('/', getAll)
router.get('/:id', getById)
router.put('/:id', update)
router.delete('/:id', _delete)

module.exports = router