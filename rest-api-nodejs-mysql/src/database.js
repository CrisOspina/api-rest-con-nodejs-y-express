//requerir modulos
const mysql = require('mysql')

//crear conexión a la db
const mysqlConnection = mysql.createConnection({
   host:     'localhost',
   user:     'root',
   password: '',
   database: 'company-nodejs'
})

//conectar a la db
mysqlConnection.connect((err) => {
   if(err){
      console.log(err)
   } else {
      console.log('DB conectada')
   }
})

//exportar
module.exports = mysqlConnection
