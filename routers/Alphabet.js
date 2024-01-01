const { demo, getAll, bnAlphabetUpdate } = require('../controllers/alphabateControllers')

const router = require('express').Router()

router.get('/:lang',getAll)
    .put('/bn/update/:id',bnAlphabetUpdate)


module.exports = router