//importar modulos
const express    = require('express')
const morgan     = require('morgan')
const bodyParser = require('body-parser')

//inicialización de express
const app = express()

//importar componentes
const productsRoutes = require('./routes/products')

//configuración
// app.set()

//Middlewares = funciones intermedias
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extend: false
}))

//Rutas
app.use('/products', productsRoutes)

//Archivos estaticos

//Comenzar server
app.listen(3000, () => {
   console.log('server on port')
})