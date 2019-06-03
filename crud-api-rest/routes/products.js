//importar modulos
const express  = require('express')
const router   = express.Router()

//importar componentes
const 
   { 
      getProducts, 
      addProducts, 
      updateProduct, 
      deleteProduct 
   } = require('../controllers/products')

//POST - GET
router.route('/')
   .get(getProducts)
   .post(addProducts)

//PUT - DELETE
router.route('/:id')
   .put(updateProduct)
   .delete(deleteProduct)

module.exports = router