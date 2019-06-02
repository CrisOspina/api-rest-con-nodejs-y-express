//importar e inicializar express
const express = require('express')
const app = express()

//configuraciones del server
app.set('appName', 'Mi primer server')

//importar morgan
const morgan = require('morgan')

//middlewares externos
//mostrar por consola las peticiones que llegan al servidor
app.use(morgan('dev'))
// app.use(morgan('combined'))
// app.use(morgan('short'))

//middlewares propios
//app.use(colocar funcion)
// app.use((req, res, next) => {
//    console.log('request url' + req.url)
//    next()
// })

// app.use((req, res, next) => {
//    console.log('Ha pasado por esta función')
//    next()
// })


//rutas
app.get('/', (req, res) => {
   res.end('hi')
})

app.get('/login', (req, res) => {
   res.end('Acá deberá ir el login')
})

//server
app.listen(3000, () => {
   console.log('server port 3000')
   console.log('Nombre de app: ' + app.get('appName'))
})