//requerir modulos
const express = require('express')

//inicializar express
const app = express()

//importar componentes
const employees = require('./routes/employees')

/***************************************************/

//configuración
app.set('port', process.env.PORT || 8089)

//middlewares = funciones que se ejecutas antes de que se ejecute algo
app.use(express.json())

//rutas
app.use(employees)

//empezando servidor
app.listen(app.get('port'), () => {
   console.log('server on port ' + app.get('port'))
})