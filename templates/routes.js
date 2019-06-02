const express = require('express')

//submodulo llamdo router
const router = express.Router()

//rutas
router.get('/', (req, res) => {
   res.render('index.ejs')
})

router.get('/login', (req, res) => {
   res.render('login.ejs')
})

//exportar router
module.exports = router