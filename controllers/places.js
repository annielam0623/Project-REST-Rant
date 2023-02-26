const router = require('express').Router()

//INDEX PAGE
router.get('/', (req, res) => {
    res.send('GET/places')
})

module.exports = router