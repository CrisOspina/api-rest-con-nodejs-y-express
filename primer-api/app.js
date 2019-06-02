//instancio libreria
const express = require('express')

//inicializar express
const app = express()

//método get para obtener datos del server
app.get('/', (req, res) => {
   res.send('recibido')
})

//método post para enviar datos al server
app.post('/', (req, res) => {
   res.send('Guardando...')
})

//método delete para eliminar registros de db
app.delete('/', (req, res) => {
   res.send('Borrado')
})

//método put para actualizar registros
app.put('/', (req, res) => {
   res.send('Actualizando...')
})

//
app.listen(3000, () => {
   console.log('server on port: 3000')
})