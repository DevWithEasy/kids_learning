const { getAll, bnAlphabetUpdate, enAlphabetUpdate, arAlphabetUpdate, dayUpdate, monthUpdate, seasonUpdate, apply } = require('../controllers/adminControllers')

const router = require('express').Router()

router.get('/server/method',apply)
    .get('/:lang',getAll)
    .put('/bn/update/:id',bnAlphabetUpdate)
    .put('/en/update/:id',enAlphabetUpdate)
    .put('/ar/update/:id',arAlphabetUpdate)
    .put('/day/update/:id',dayUpdate)
    .put('/month/update/:id',monthUpdate)
    .put('/season/update/:id',seasonUpdate)
    


module.exports = router