const { getAll, bnAlphabetUpdate, enAlphabetUpdate, arAlphabetUpdate, dayUpdate, monthUpdate, seasonUpdate, apply, getNumber, numberUpdate, getColors, getDays, getMonth, getSeason } = require('../controllers/adminControllers')

const router = require('express').Router()

router.get('/server/method',apply)
    .get('/:lang',getAll)
    .put('/bn/update/:id',bnAlphabetUpdate)
    .put('/en/update/:id',enAlphabetUpdate)
    .put('/ar/update/:id',arAlphabetUpdate)
    .put('/day/update/:id',dayUpdate)
    .put('/month/update/:id',monthUpdate)
    .put('/season/update/:id',seasonUpdate)
    .get('/number/en',getNumber)
    .put('/number/en/update/:id',numberUpdate)
    .get('/find/colors',getColors)
    .get('/find/days',getDays)
    .get('/find/months',getMonth)
    .get('/find/seasons',getSeason)

module.exports = router