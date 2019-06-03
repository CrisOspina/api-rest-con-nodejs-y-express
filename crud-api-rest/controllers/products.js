//importar componentes
const { products } = require('../db.json')

module.exports = {
   //GET
   getProducts: (req, res) => {
      res.json({
         products
      })
   },
   //POST
   addProducts: (req, res) => {
      const { name } = req.body
      //Inserción
      products.push({
         id: products.length,
         name
      })
      //Respuesta
      res.json({
         'success': true,
         'msg': 'Inserción exitosa'
      })
   },
   //PUT
   updateProduct: (req, res) => {
      const { id }   = req.params
      const { name } = req.body
      //Actualización de campo
      products.forEach((product, i) => {
         if(product.id === Number(id)){
            product.name = name
         }
      })
      //Respuesta
      res.json({
         'success': true,
         'msg': 'Actualización exitosa'
      })
   },
   //DELETE
   deleteProduct: (req, res) => {
      const { id } = req.params
      //Borrar registro
      products.forEach((product, i) => {
         if(product.id === Number(id)){
            products.splice(i, 1)
         }
      })
      //Respuesta
      res.json({
         'success': true,
         'msg': 'Eliminado exitosamente'
      })
   }
}