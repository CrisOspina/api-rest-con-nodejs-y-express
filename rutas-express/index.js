//express
const express = require('express')

//inicializar express
const app = express()

//ruta inicial
app.get('/', (req, res) => {
   res.end('hello world')
})

//ruta login
app.get('/login', (req, res) => {
   res.end('Aqui va el login')
})

//ruta al no encontrar archivos
app.get('*', (req, res) => {
   res.end('Not found')
})

//server
app.listen(3000, () => {
   console.log('http://localhost:3000')
})
