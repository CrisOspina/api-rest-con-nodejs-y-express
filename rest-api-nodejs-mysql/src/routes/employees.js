//importar modulos y database
const express = require('express')
const mysqlConnection = require('../database')
const router = express.Router()

//rutas
//principal - retorna todos los datos
router.get('/', (req, res) => {
   mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
      if(!err){
         res.json(rows)
      } else {
         console.log(err)
      }
   })
})

//ruta que devolvera un registro segun su id
router.get('/:id', (req, res) => {
   const {id} = req.params
   mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
      if(!err){
         res.json(rows[0])
      } else {
         console.log(err)
      }
   })
})

//ruta para insertar registros
router.post('/', (req, res) => {
   const {id, name, salary} = req.body
   //procedimiento almacenado creado en mysql
   const query = 'CALL employeesAddOrEdit(?, ?, ?)';
   mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
      if(!err){
         res.json({
            status: 'Empleado guardado'
         })
      } else {
         console.log(err)
      }
   })
})

//ruta para insertar registros
router.put('/:id', (req, res) => {
   const { name, salary} = req.body
   const {id} = req.params
   const query = 'call employeesAddOrEdit(?, ?, ?)'
   mysqlConnection.query(query,[id,name,salary], (err,rows, fields) => {
      if(!err){
         res.json({
            status: "Empleado actualizado"
         })
      } else {
         console.log(err)
      }
   })
})

//rutas para eliminar registros
router.delete('/:id', (req, res) => {
   const {id} = req.params
   mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
      if(!err){
         res.json({
            status: "Empleado eliminado"
         })
      } else {
         console.log(err)
      }
   })
})

//si no encuentra las rutas anteriores, not found
router.get('*', (req, res) => {
   res.json({
      status: "Not found"
   })
})

//exportar
module.exports = router