const express = require('express')
const morgan  = require('morgan')
const app     = express()

//importando rutas
const routes = require('./routes')

//importaando api
const routesApi = require('./route-api')

//configurar motor de plantilla, en este caso ejs
app.set('view-engine', 'ejs')

//configurar vistas
//__dirname = ubicación actual de la carpeta
app.set('views', __dirname + '/views')

//middleware morgan para ver peticiones del servidor
app.use(morgan('dev'))

//rutas
app.use(routes)

//api
app.use('/api', routesApi)

app.get('*', (req, res) => {
   res.end('Page no encontrada')
})

//server
app.listen(3000, () => {
   console.log('server port 3000')
})

